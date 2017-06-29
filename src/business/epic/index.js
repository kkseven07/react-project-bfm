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
    createOrder,

    bookFormat,

    checkVoucher

} from "./epics/api";
import {
    storageCreateBook,
    loadCache,
    loadFromCache,
    deleteFromCache,
    orderStorage,
    deleteBooksFromCache
} from "./epics/cache";
import { input, changeForm, bookVersion, sendOrder,sendVoucher } from "./epics/form";
import { delayLoading, uploadDelay } from "./epics/delay";
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
    bookFormat,
    createOrder,
    bookVersion,
    genPages,
    updatePage,
    changeRoute,
    getBook,
    upload,
    getBookPage,
    delayLoading,
    storageCreateBook,
    loadCache,
    loadFromCache,
    deleteFromCache,
    sendOrder,
    orderStorage,
    deleteBooksFromCache,
    sendVoucher,
    checkVoucher,
    uploadDelay
    // loadOrderCache
);

export default rootEpic;