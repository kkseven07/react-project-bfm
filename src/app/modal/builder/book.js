import React from "react";
import "./book.css";
import { getBookName, textColor } from "../../shared/utils.js";
import {Paspartu} from '../../shared'
export default ({ book,cover, history }) => {
    const color = cover.data;
    return (
        <div style={{marginTop:20}}
            className="flex width-full flex-center"
        >
            <div
                className="flex"
                styleName="r"
                style={{
                    background: color.background,
                    color: color.text_color,
                    position:'relative'
                }}
            >
                <div styleName="korewok"></div>
                <Paspartu name={getBookName(book.book_name, book.name)} page={cover}/>
            </div>
        </div>
    );
};
