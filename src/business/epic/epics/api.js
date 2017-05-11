import {ajax} from 'rxjs/observable/dom/ajax';
import Hashids from 'hashids'
import {of as ofObs} from  'rxjs/observable/of'
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
export const createHashid = (id) =>{
    let hashids = new Hashids('', 10);
    return hashids.encode(id)
}

export const decodeHashid = (hashed) => {
    let hashids = new Hashids('', 10);
    return hashids.decode(hashed)
}
const url = "http://localhost:4000"
export const updatePage = action$ =>
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


export const createBook = action$ =>
    action$
        .ofType("CREATE_BOOK")
        .mergeMap(({book,history})=>{
            return ajax({
                url: `${url}/api/v1/books`,
                body: {book: JSON.stringify(book)},
                ...ajaxObject
            })
            .flatMap(ajax=>{
                let hashed_id = createHashid(ajax.response.book.id)
                history.push(`/books/${hashed_id}`)
                return [
                    {type: "FETCH_BOOK_FULFILLED", payload: ajax.response},
                ]
            })
            .catch(error => ofObs({type: "AJAX_ERROR", payload: error}))
        })

export const genPages = action$ =>
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



