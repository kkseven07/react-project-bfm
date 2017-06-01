import React from "react";
import "./book.css";
import { getBookName, textColor } from "../../shared/utils.js";
export default ({ book,cover, history }) => {
    const color = cover.data.color;
    return (
        <div style={{marginTop:20}}
            className="flex width-full flex-center"
        >
            <div
                className="flex"
                styleName="r"
                style={{
                    background: color.background,
                    color: color.text_color
                }}
            >
                {getBookName(book.book_name, book.name)}
            </div>
        </div>
    );
};
