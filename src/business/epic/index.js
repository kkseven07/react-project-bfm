import { combineEpics } from "redux-observable";
import { routerActions } from "react-router-redux";
import {
    createBook,
    updatePage,
    genPages,
    changeRoute,
    getBook
} from "./epics/api";
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
    changeRoute,
    getBook,
    delayLoading
);

export default rootEpic;
