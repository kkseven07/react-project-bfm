import { normalisePages } from "../../reducer/reducers/book";
import reverse from "lodash/reverse";

export const storageCreateBook = (action$, store) =>
    action$
        .filter(action =>
            [
                "UPLOAD_FULFILLED",
                "UPDATE_PAGE_FULFILLED",
                "FETCH_BOOK_FULFILLED",
                "UPDATE_ORDER_FULFILLED"
            ].includes(action.type)
        )
        .switchMap(({ payload }) => {
            const bookState = store.getState().book;
            const currentBookId = bookState.currentBookId;
            const book = bookState[currentBookId];
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

        return [{ type: "LOAD_CACHE_FULFILLED", payload:items }];
    });



