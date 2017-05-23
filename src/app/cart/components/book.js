import React from "react";
import "./book.css";
import values from "lodash/values";
import reverse from "lodash/reverse";
const getCover = book => {
    let data = values(book.pages);
    return data.filter(v => v.type === "cover")[0];
};

const types = {
    digital: "Цифровая версия",
    soft: "Мягкий переплет",
    hard: "Твердый переплет"
};
import { getBookName, textColor } from "../../shared/utils.js";
export default ({ book }) => {
    let color = getCover(book).data.color;
    return (
        <div
            style={{
                //background: "red",
                padding: 15
            }}
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
                className="flex flex-column"
                style={{ padding: 20, paddingTop: 5 }}
            >

                <div styleName="book-type">
                    {types[book.order.type]}
                </div>
                <div onClick={() => {}} style={{ marginTop: 20 }}>
                    Изменить
                </div>

            </div>

        </div>
    );
};
