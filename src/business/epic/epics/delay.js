import { of as ofObs } from "rxjs/observable/of";

export const delayLoading = action$ =>
    action$
        .ofType("FETCH_BOOK_FULFILLED")
        .delay(200)
        .flatMap(action => [{ type: "FETCH_BOOK_FULFILLED_DELAY" }]);
