import { ajax } from "rxjs/observable/dom/ajax";
import Hashids from "hashids";
import { of as ofObs } from "rxjs/observable/of";
import url from "../../../entry/url";
const ajaxObject = {
    method: "POST",
    content_type: "application/json",
    dataType: "json",
    type: "POST"
};
const ajaxObjectGet = {
    method: "GET",
    content_type: "application/json",
    dataType: "json",
    type: "GET"
};
export const createHashid = id => {
    let hashids = new Hashids("", 10);
    return hashids.encode(id);
};

export const decodeHashid = hashed => {
    let hashids = new Hashids("", 10);
    return hashids.decode(hashed);
};

const checkUrl = (first, second) => {
    const part = first.split("smx25")[0];
    return second.indexOf(part) > -1;
};

export const updatePage = action$ =>
    action$.ofType("UPDATE_PAGE").switchMap(({ page, params }) => {
        // return ofObs({ type: "CLOSE_MODAL"})
        if (
            (params.background &&
                params.background !== page.data.background) ||
            (params.text && params.text !== page.data.text) ||
            (params.text1 && params.text1 !== page.data.text1) ||
            (params.text2 && params.text2 !== page.data.text2) ||
            (params.selectedImage &&
                !checkUrl(params.selectedImage, page.primary_image.image.url))
        ) {
            const id = page.type === "qualityTable" ? page.id + 1 : page.id;
            return ajax({
                url: `${url}/api/v1/batch/${id}`,
                body: { params: JSON.stringify({...params,type:page.type}) },
                ...ajaxObject
            })
                .flatMap(ajax => {
                    return [
                        { type: "CLOSE_MODAL" },
                        {
                            type: "UPDATE_PAGE_FULFILLED",
                            payload: ajax.response
                        }
                    ];
                })
                .catch(error => {

                    return ofObs({ type: "AJAX_ERROR", payload: error, errorType:"updatePage error" })});
        } else {
            return [{ type: "CLOSE_MODAL" },{type:"UPDATE_PAGE_DONE"}];
        }
    });
export const updateOrder = (action$, store) =>
    action$.ofType("UPDATE_ORDER").mergeMap(({ order_id, params }) => {
        let price;
        const book_state = store.getState().book;
        const book_id = book_state.currentBookId;
        const book = book_state[book_id];
        if (params.value === "digital") {
            price = 2900;
        } else if (params.value === "soft" && params.size === "21") {
            price = 9900;
        } else if (params.value === "soft" && params.size === "23") {
            price = 11900;
        } else if (params.value === "hard" && params.size === "21") {
            price = 14900;
        } else if (params.value === "hard" && params.size === "23") {
            price = 17900;
        }
        const book_price = price + "";
        if (params.giftWrap !== "" && params.value !== "digital") {
            price = price + 1000;
        }
        const toSend = {
            type: params.value,
            price: price + "",
            data: { size: params.size, gift_wrap: params.giftWrap, book_price }
        };
        if (
            toSend.type === book.order.type &&
            toSend.price === book.order.price &&
            toSend.data.size === book.order.data.size &&
            toSend.data.giftWrap === book.order.data.giftWrap
        ) {
            return [{ type: "LOCAL_UPDATE_ORDER" }];
        }

        return ajax({
            url: `${url}/api/v1/orders/${order_id}`,
            body: { params: JSON.stringify(toSend) },
            ...ajaxObject
        })
            .flatMap(ajax => {
                return [
                    { type: "UPDATE_ORDER_FULFILLED", payload: ajax.response }
                ];
            })
            .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }));
    });

export const createOrder = (action$, store) =>
    action$.ofType("CONFIRM_ORDER").switchMap(({order})=> {
        const bookIds = store.getState().order.books.map((key)=> key.id);
        const orderDetails = store.getState().order.orderDetails;
        console.log("boookIds", bookIds)
        const params = {books:bookIds, orderDetails:orderDetails}
        return ajax({
            url:`${url}/api/v1/orders`,
            body: {params: JSON.stringify(params)},
            ...ajaxObject
        })

        .flatMap(ajax=> {
            let orderId = ajax.response.order_id;
            console.log("AJAX RESPONSE");
            return [
                {type: "CREATE_ORDER_FULFILLED", orderId:orderId},
                {type:"DELETE_BOOKS_FROM_CACHE"}
            ]
        })
        .catch(error=>ofObs({type:"AJAX_ERROR", payload:error, mesage:"Произошла ошибка с отправкой заказа."}));
});

// "you" "mom" "dad"

export const createBook = action$ =>
    action$.ofType("CREATE_BOOK").mergeMap(({ book, history }) => {
        return ajax({
            url: `${url}/api/v1/books`,
            body: { book: JSON.stringify(book) },
            ...ajaxObject
        })
            .flatMap(ajax => {
                let hashed_id = createHashid(ajax.response.book.id);
                //("in create book api epic", hashed_id);

                history.push(`/books/${hashed_id}`);
                return [
                    { type: "FETCH_BOOK_FULFILLED", payload: ajax.response },
                    {
                        type: "OPEN_MODAL",
                        page: { type: "info" },
                        book: {
                            book: ajax.response.book,
                            cover: ajax.response.pages[0]
                        }
                    },
                ];
            })
            .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }));
    });

export const upload = action$ =>
    action$.ofType("UPLOAD").switchMap(({ book_id, page, params }) => {
        let form_data = new FormData();
        form_data.append("file", params);
        return ajax({
            url: `${url}/api/v1/books/${book_id}/${page.id}`,
            body: form_data,
            ...ajaxObject
        })
            .flatMap(ajax => {
                return [
                    {
                        type: "UPLOAD_FULFILLED",
                        payload: ajax.response
                    },
                    { type: "CLOSE_MODAL" }
                ];
            })
            .catch(error =>
                ofObs({
                    type: "AJAX_ERROR",
                    payload: error,
                    message: "Картинка не была загружена!"
                })
            );
    });

export const getBook = action$ =>
    action$.ofType("GET_BOOK").switchMap(({ book_id }) => {
        return ajax({ url: `${url}/api/v1/books/${book_id}`, ...ajaxObjectGet })
            .flatMap(ajax => {
                return ofObs({
                    type: "GEN_PAGES_FULFILLED",
                    payload: ajax.response
                });
            })
            .catch(error =>
                ofObs({
                    type: "AJAX_ERROR",
                    payload: error,
                    message: "Книга не найдена!"
                })
            );
    });
export const getBookPage = action$ =>
    action$.ofType("GET_BOOK_PAGE").switchMap(({ book_id, page_type }) => {
        return ajax({
            url: `${url}/api/v1/books/${book_id}/${page_type}`,
            ...ajaxObjectGet
        })
            .flatMap(ajax => {
                return ofObs({
                    type: "PAGE_FOUND",
                    payload: ajax.response
                });
            })
            .catch(error =>
                ofObs({
                    type: "AJAX_ERROR",
                    payload: error,
                    message: "Page not found, you are welcome, Ilyas"
                })
            );
    });

export const genPages = action$ =>
    action$.ofType("GEN_PAGES").mergeMap(({ count, book_id }) => {
        return (
            ajax({
                url: `${url}/api/v1/gen_pages/${count}/${book_id}`,
                ...ajaxObjectGet
            })
                // .delay(100)
                .flatMap(ajax => {
                    return ofObs({
                        type: "GEN_PAGES_FULFILLED",
                        payload: ajax.response
                    });
                })
                .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }))
        );
    });

const getModal = action$ =>
    action$.ofType("RODAL").mergeMap(({ page }) => {
        return ajax({
            url: `${url}/api/v1/for_update/${page.type}`,
            ...ajaxObjectGet
        })
            .flatMap(ajax => {
                return ofObs({
                    type: "RODAL_FULFILLED",
                    payload: ajax.response,
                    pageType: page.type
                });
            })
            .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }));
    });

export const changeRoute = action$ =>
    action$.ofType("CHANGE_ROUTE").delay(500).flatMap(({ reroute }) => {
        reroute();
        return [{ type: "DONE" }];
    });
