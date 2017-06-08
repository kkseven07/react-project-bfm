import React from "react";
import Buttons from "./buttons";
import { connect } from "react-redux";
import Page from '../../../pages/page'
import url from "../../../../entry/url.js"

export default ({ page, book, actions, form, comp }) => {
    return <Page actions={actions} zoom url={url} book={book} page={page} />
}