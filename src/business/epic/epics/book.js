import { normalisePages } from "../../reducer/reducers/book";

export const storageCreateBook = (action$, store) =>
    action$
        .filter(action =>
            [
                "UPLOAD_FULFILLED",
                "UPDATE_PAGE_FULFILLED",
                "FETCH_BOOK_FULFILLED"
            ].includes(action.type)
        )
        .switchMap(({ payload }) => {
            const bookState = store.getState().book
            const currentBookId=bookState.currentBookId
            const book = bookState[currentBookId]
            localStorage.setItem(currentBookId, JSON.stringify(book));
            return [{ type: "OK" }, { type: "CLOSE_MODAL" }];
        });
