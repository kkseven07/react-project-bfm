import { normalisePages } from "../../reducer/reducers/book";
import reverse from "lodash/reverse";
import CryptoJS from "crypto-js";
var Base64 = require("js-base64").Base64;

const encodeItem = item => {
    let s=JSON.stringify(item)
    Base64.encode(s)
};

const decodeItem = item => {};
import Hashids from "hashids";
export const createHashid = id => {
    let hashids = new Hashids("", 10);
    return hashids.encode(id);
};
export const storageCreateBook = (action$, store) =>
    action$
        .filter(
            action =>
                [
                    "UPLOAD_FULFILLED",
                    // "UPDATE_PAGE_FULFILLED",
                    "FETCH_BOOK_FULFILLED",
                    "UPDATE_ORDER_FULFILLED",
                    "GEN_PAGES_FULFILLED",
                    "BOOK_VERSION",
                    "BOOK_LOADED",
                    "UPDATE_PAGE"
                ].indexOf(action.type) > -1
        )
        .switchMap(({ payload }) => {
            const bookState = store.getState().book;
            const currentBookId = bookState.currentBookId;
            const book = bookState[currentBookId];
            try {
                localStorage.setItem(
                    "bookKey_" + currentBookId,
                    JSON.stringify(book)
                );
            } catch (e) {
                // console.log(e)
                localStorage.clear();
            }
            return [{ type: "OK" }, { type: "CLOSE_MODAL" }];
        });

export const loadCache = (action$, store) =>
    action$.ofType("LOAD_CACHE").switchMap(action => {
        try {
            localStorage.getItem("key")
        }catch(e){
            return [{ type: "OK" }];
        }
        const items = reverse(
            Object.keys(localStorage).map(key => {
                let type;
                if (key.indexOf("bookKey") > -1) {
                    type = "books";
                } else if (key.indexOf("order")> -1) {
                    type = "orders";
                }
                else {
                    type="other";
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
        localStorage.removeItem("bookKey_" + id);
        return [{ type: "DELETE_FROM_CACHE_FULFILLED", payload: id }];
    });

export const loadFromCache = (action$, store) =>
    action$.ofType("LOAD_FROM_CACHE").switchMap(action => {
        // console.log(createHashid(281))
        return [{ type: "LOAD_FROM_CACHE_FULFILLED" }];
    });

//order

export const orderStorage = (action$, store) =>
    action$.ofType("CREATE_ORDER_FULFILLED").switchMap(({ payload }) => {
        const order = store.getState().order;
        try {
            localStorage.setItem(
                `orderKey_${order.orderId}`,
                JSON.stringify(order)
            );
        } catch (e) {
            localStorage.clear();
        }
        return [{ type: "LOAD_CACHE" }];
    });

export const deleteBooksFromCache = (action$, store) =>
    action$.ofType("DELETE_BOOKS_FROM_CACHE").switchMap(action => {
        Object.keys(localStorage)
            .filter(key => key.match("bookKey"))
            .forEach(key => localStorage.removeItem(key));
        return [{ type: "DELETE_BOOKS_FROM_CACHE_FULFILLED" }];
    });
