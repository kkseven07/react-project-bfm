import React from "react";
import Buttons from "./buttons";
import { connect } from "react-redux";
import Page from '../../../pages/page'
export default ({ page, book, actions, form, comp }) => {
    console.log("COMP", comp)
    return <Page actions={actions} zoom url={"http://localhost:4000"} book={book} page={page} />
}