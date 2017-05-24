import React from "react";
import "./book.css";
import values from "lodash/values";
import reverse from "lodash/reverse";
import Hashids from "hashids";
const getCover = book => {
    let data = values(book.pages);
    return data.filter(v => v.type === "cover")[0];
};

const types = {
    digital: "Цифровая версия",
    soft: "Мягкий переплет",
    hard: "Твердый переплет"
};
export const createHashid = id => {
    let hashids = new Hashids("", 10);
    return hashids.encode(id);
};

import { getBookName, textColor } from "../../shared/utils.js";
export default ({ book, history }) => {
    let color = getCover(book).data.color;
    return (
        <div
            style={{
                padding: 15
            }}
            styleName="container"
            className="flex full "
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

            <div
                className="flex flex-column "
                styleName="desc"
            >

                <div styleName="book-type">
                    {types[book.order.type]}
                </div>
                <div
                    onClick={() => {
                        let hashed_id = createHashid(book.id);
                        history.push(`/books/${hashed_id}`);
                    }}
                    styleName="edit"
                >
                    ИЗМЕНИТЬ
                </div>

            </div>

        </div>
    );
};
