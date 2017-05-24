import { combineEpics } from "redux-observable";
import { routerActions } from "react-router-redux";
import {
    createBook,
    updatePage,
    genPages,
    changeRoute,
    getBook,
    upload,
    getBookPage,
    updateOrder
} from "./epics/api";
import {storageCreateBook ,loadCache ,loadFromCache} from './epics/book'
import { input, changeForm } from "./epics/form";
import { delayLoading } from "./epics/delay";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";

const rootEpic = combineEpics(
    input,
    changeForm,
    createBook,
    genPages,
    updatePage,
    updateOrder,
    changeRoute,
    getBook,
    upload,
    getBookPage,
    delayLoading,
    storageCreateBook,
    loadCache,
    loadFromCache
);

export default rootEpic;
