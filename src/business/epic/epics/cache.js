import { normalisePages } from "../../reducer/reducers/book";
import reverse from "lodash/reverse";

export const storageCreateBook = (action$, store) =>
    action$
        .filter(
            action =>
                [
                    "UPLOAD_FULFILLED",
                    "UPDATE_PAGE_FULFILLED",
                    "FETCH_BOOK_FULFILLED",
                    "UPDATE_ORDER_FULFILLED",
                    "GEN_PAGES_FULFILLED",
                    "BOOK_VERSION",
                    "UPDATE_PAGE"
                ].indexOf(action.type) > -1
        )
        .switchMap(({ payload }) => {
            const bookState = store.getState().book;
            const currentBookId = bookState.currentBookId;
            const book = bookState[currentBookId];
            // console.log("in storatge book fulfilled")
            // localStorage.clear()
            try {
                localStorage.setItem(
                    "bookKey_" + currentBookId,
                    JSON.stringify(book)
                );
            } catch (e) {
                localStorage.clear();
            }
            return [{ type: "OK" }, { type: "CLOSE_MODAL" }];
        });

export const loadCache = (action$, store) =>
    action$.ofType("LOAD_CACHE").switchMap(action => {
        const items = reverse(
            Object.keys(localStorage).map(key => {
                let type;
                if (key.indexOf("order") < 0) {
                    type = "books";
                } else {
                    type = "orders";
                }
                return { type, item: JSON.parse(localStorage.getItem(key)) };
            })
        );
        const bookItems = items
            .filter(obj => obj.type === "books")
            .map(obj => obj.item);
        const orderItems = items
            .filter(obj => obj.type === "orders")
            .map(obj => obj.item);

        if (bookItems.length < 1) {
            return [
                { type: "OK" },
                { type: "LOAD_ORDER_CACHE_FULFILLED", payload: orderItems }
            ];
        }
        return [
            { type: "LOAD_CACHE_FULFILLED", payload: bookItems },
            { type: "LOAD_ORDER_CACHE_FULFILLED", payload: orderItems }
        ];
    });

export const deleteFromCache = (action$, store) =>
    action$.ofType("DELETE_FROM_CACHE").switchMap(({ id }) => {
        localStorage.removeItem("bookKey_"+id);
        return [{ type: "DELETE_FROM_CACHE_FULFILLED", payload: id }];
    });

export const loadFromCache = (action$, store) =>
    action$.ofType("LOAD_FROM_CACHE").delay(100).switchMap(action => {
        return [{ type: "LOAD_FROM_CACHE_FULFILLED" }];
    });

//order

export const orderStorage = (action$, store) =>
    action$.ofType("CONFIRM_ORDER_FULFILLED").switchMap(({ payload }) => {
        const order = store.getState().order;
        const orderId = 1;
        try {
            localStorage.setItem("orderKey", JSON.stringify(order));
        } catch (e) {
            localStorage.clear();
        }
        return [{ type: "ORDER_OK" }];
        console.log("cache", localStorage);
    });

// export const loadOrderCache = (action$, store) =>
//     action$.ofType("LOAD_ORDER_CACHE").switchMap(action => {
//         const items = reverse(
//             Object.keys(localStorage)
//                 .filter(key => key.indexOf("order") > -1)
//                 .map(key => JSON.parse(localStorage.getItem(key)))
//         );
//         const orderItems = items.filter(key => key !== false);
//         if (orderItems.length < 1) {
//             return [{ type: "OK" }];
//         }
//         console.log("orderItems", orderItems);

//         return [{ type: "LOAD_ORDER_CACHE_FULFILLED", payload: orderItems }];
//     });
