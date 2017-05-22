import { of as ofObs } from "rxjs/observable/of";

export const delayLoading = action$ =>
    action$.ofType("FETCH_BOOK_FULFILLED").delay(0).flatMap(action => [
        { type: "FETCH_BOOK_FULFILLED_DELAY" }
        //{type:"CLEAR_GIFT_FORM"}
    ]);
