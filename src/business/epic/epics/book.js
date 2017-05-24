import { normalisePages } from "../../reducer/reducers/book";
import reverse from "lodash/reverse";

export const storageCreateBook = (action$, store) =>
    action$
        .filter(action =>
            [
                "UPLOAD_FULFILLED",
                "UPDATE_PAGE_FULFILLED",
                "FETCH_BOOK_FULFILLED",
                "UPDATE_ORDER_FULFILLED",
                "GEN_PAGES_FULFILLED"
            ].includes(action.type)
        )
        .switchMap(({ payload }) => {
            const bookState = store.getState().book;
            const currentBookId = bookState.currentBookId;
            const book = bookState[currentBookId];
            console.log("in storatge book fulfilled")
            // localStorage.clear()
            try {
                localStorage.setItem(currentBookId, JSON.stringify(book));
            } catch (e) {
                localStorage.clear();
            }
            return [{ type: "OK" }, { type: "CLOSE_MODAL" }];
        });

export const loadCache = (action$, store) =>
    action$.ofType("LOAD_CACHE").switchMap(action => {
        const items = reverse(
            Object.keys(localStorage).map(key =>
                JSON.parse(localStorage.getItem(key))
            )
        );
        if(items.length<1){
            return [{ type: "OK"}]
        }

        return [{ type: "LOAD_CACHE_FULFILLED", payload:items }];
    });

export const loadFromCache = (action$, store) =>
    action$.ofType("LOAD_FROM_CACHE").delay(1000).switchMap(action => {
        return [{ type: "LOAD_FROM_CACHE_FULFILLED"}];
    });


