import { of as ofObs } from "rxjs/observable/of";

export const delayLoading = action$ =>
    action$
        .ofType("FETCH_BOOK_FULFILLED")
        .delay(500)
        .flatMap(action => [
            { type: "FETCH_BOOK_FULFILLED_DELAY" },
           { type: "CLEAR_GIFT_FORM" }
        ]);

export const uploadDelay = action$ =>
    action$
        .ofType("UPLOAD_FULFILLED")
        .delay(200)
        .flatMap(action => [
            { type: "UPLOAD_FULFILLED_DELAY" },
        ]);