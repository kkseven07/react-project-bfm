import { ajax } from "rxjs/observable/dom/ajax";
import Hashids from "hashids";
import { of as ofObs } from "rxjs/observable/of";
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
const url = "http://localhost:4000";

const checkUrl = (first, second) => {
    const part = first.split("320")[0];
    return second.includes(part);
};

export const updatePage = action$ =>
    action$.ofType("UPDATE_PAGE").mergeMap(({ page, params }) => {
        if (
            params.text ||
            (params.selectedImage &&
                !checkUrl(params.selectedImage, page.primary_image.image.url))
        ) {
            return ajax({
                url: `${url}/api/v1/update/${page.type}/${page.id}`,
                body: { params: JSON.stringify(params) },
                ...ajaxObject
            })
                .flatMap(ajax => {
                    if (ajax.response.nothing) {
                        return [{ type: "CLOSE_MODAL" }];
                    }
                    return [
                        {
                            type: "UPDATE_PAGE_FULFILLED",
                            payload: ajax.response
                        },
                        { type: "CLOSE_MODAL" }
                    ];
                })
                .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }));
        } else {
            return [{ type: "CLOSE_MODAL" }];
        }
    });

export const createBook = action$ =>
    action$.ofType("CREATE_BOOK").mergeMap(({ book, history }) => {
        return ajax({
            url: `${url}/api/v1/books`,
            body: { book: JSON.stringify(book) },
            ...ajaxObject
        })
            .flatMap(ajax => {
                let hashed_id = createHashid(ajax.response.book.id);
                history.push(`/books/${hashed_id}`);
                return [
                    { type: "FETCH_BOOK_FULFILLED", payload: ajax.response }
                    // {type:"CHANGE_ROUTE",reroute:reroute}
                ];
            })
            .catch(error => ofObs({ type: "AJAX_ERROR", payload: error }));
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
