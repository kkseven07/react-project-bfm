import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";

import loading from "./reducers/loading";
import form from "./reducers/form";
import book from "./reducers/book";
import modal from "./reducers/modal";
import builder from "./reducers/builder";
const reducer = combineReducers({
    routing,
    loading,
    form,
    book,
    modal,
    builder
});

export default reducer;
