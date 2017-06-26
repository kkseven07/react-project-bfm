import React from "react";
import "./book.css";
import { utils } from "../../shared";
const getFontSize = str => {
    if (str.length > 9 && str.length < 15) {
        return "0.8em";
    } else if (str.length >= 15 && str.length < 20) {
        return "0.6em";
    } else if (str.length >= 20 && str.length < 27) {
        return "0.45em";
    } else if (str.length >= 27) {
        return "0.4em";
    } else {
        return "1em";
    }
};
export default({ bookName, name,bookType }) => {
    const result = utils.getBookName(bookName, name,bookType);
    const toRender = utils.getBookName(bookName, name,bookType);
    let fontSize = "1em";

    if (result instanceof Array) {
        result.sort((a, b) => b.length - a.length);
        fontSize = getFontSize(result[0]);
    } else {
        fontSize = getFontSize(result);
    }
    return (
        <div styleName="r" className="flex app-blue" >
            <div style={{ fontSize: fontSize, fontFamily: "BebasBold" }}>
                {toRender}
            </div>
        </div>
    );
};


