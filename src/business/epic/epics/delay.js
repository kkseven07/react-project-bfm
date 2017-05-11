
import {of as ofObs} from  'rxjs/observable/of'

export const delayLoading = action$ =>
    action$
        .ofType("FETCH_BOOK_FULFILLED")
        .delay(200)
        .mapTo({type:"FETCH_BOOK_FULFILLED_DELAY"})



