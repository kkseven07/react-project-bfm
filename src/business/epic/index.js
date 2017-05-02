import { combineEpics } from 'redux-observable'
import {push} from 'react-router-redux'
import {ajax} from 'rxjs/observable/dom/ajax';
import Hashids from 'hashids'
import {of as ofObs} from  'rxjs/observable/of'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
const ajaxObject={
    method: 'POST',
    content_type: "application/json",
    dataType: 'json',
    type: 'POST',
}
const ajaxObjectGet={
    method: 'GET',
    content_type: "application/json",
    dataType: 'json',
    type: 'GET',
}
const url = "http://localhost:4000"
// const url = "http://46.101.217.205:4000"
export const createHashid = (id) =>{
    let hashids = new Hashids('', 10);
    return hashids.encode(id)
}

export const decodeHashid = (hashed) => {
    let hashids = new Hashids('', 10);
    return hashids.decode(hashed)
}

const pingEpic = action$ =>
    action$
        .ofType("TEST")
        .delay(1000)
        .mapTo(push("/book/12"));

const input = action$ =>
    action$
        .ofType("ENTER_INPUT")
        .filter(action =>["day","year","month","name"].indexOf(action.field)>-1)
        .mapTo({type: "CHECK_DATE"})

const getModal = action$ =>
    action$
        .ofType("RODAL")
        .mergeMap(({page})=> {
            return ajax({
                url: `${url}/api/v1/for_update/${page.type}`,
                ...ajaxObjectGet
            })
            .flatMap(ajax => {
                return ofObs({type: "RODAL_FULFILLED", payload: ajax.response,pageType:page.type})
            })
            .catch(error => ofObs({type: "AJAX_ERROR", payload: error}))
        })

const updatePage = action$ =>
    action$
        .ofType("UPDATE_PAGE")
        .mergeMap(({page,params})=>{
            console.log(params)
            return ajax({
                url:`${url}/api/v1/update/${page.type}/${page.id}`,
                body: {params: JSON.stringify(params)},
                ...ajaxObject
            })
            .flatMap(ajax=>{
                return [{type: "UPDATE_PAGE_FULFILLED", payload: ajax.response},
                    {type:"CLOSE_MODAL"}
                   ]
            })
            .catch(error => ofObs({type: "AJAX_ERROR", payload: error}))
        })

const createBook = action$ =>
    action$
        .ofType("CREATE_BOOK")
        .mergeMap(({book})=>{
            return ajax({
                url: `${url}/api/v1/books`,
                body: {book: JSON.stringify(book)},
                ...ajaxObject
            })
            // .delay(1000)
            .flatMap(ajax=>{
                let hashed_id = createHashid(ajax.response.book.id)
                return [
                    {type: "FETCH_BOOK_FULFILLED", payload: ajax.response},
                    push(`/book/${hashed_id}`)
                ]
            })
            .catch(error => ofObs({type: "AJAX_ERROR", payload: error}))
        })

const genPages = action$ =>
    action$
        .ofType("GEN_PAGES")
        .mergeMap(({count, book_id})=>{
            return ajax({
                url: `${url}/api/v1/gen_pages/${count}/${book_id}`,
                ...ajaxObjectGet
            })
            // .delay(100)
            .flatMap(ajax => {
                return ofObs({type: "GEN_PAGES_FULFILLED", payload: ajax.response})
            })
            .catch(error=> ofObs({type: "AJAX_ERROR", payload: error}))
        })

const rootEpic = combineEpics(
  pingEpic,
  input,
  createBook,
  genPages,
  getModal,
  updatePage
)


export default rootEpic


