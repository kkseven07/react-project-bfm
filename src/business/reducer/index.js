import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";

import loading from "./reducers/loading";
import form from "./reducers/form";
import book from "./reducers/book";
import modal from "./reducers/modal";
import builder from "./reducers/builder";
import page from './reducers/page'
import init from './reducers/init'
import order from './reducers/order'
import menu from './reducers/menu'
const reducer = combineReducers({
    routing,
    loading,
    form,
    book,
    modal,
    builder,
    page,
    init,
    order,
    menu
});

export default reducer;
