import React from "react";
import "./book.css";
import values from "lodash/values";
import reverse from "lodash/reverse";
import Hashids from "hashids";
import {Paspartu} from '../../shared'
const getCover = book => {
    let data = values(book.pages);
    return data.filter(v => v.type === "cover")[0];
};

let types={
    digital:"Цифровая версия",
    soft19: "Мягкий переплет",
    soft23:"Мягкий переплет",
    hard19:"Твердый переплет",
    hard23:"Твердый переплет",
    deluxe:"Deluxe",
    fumoney:"К черту деньги!"
}
export const createHashid = id => {
    let hashids = new Hashids("", 10);
    return hashids.encode(id);
};

import { getBookName, textColor } from "../../shared/utils.js";
export default ({ book, history }) => {
    let color = getCover(book).data;
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
                    color: color.text_color,
                    position:'relative'
                }}
            >
                <div styleName="korewok"></div>
                <Paspartu name={getBookName(book.book_name, book.name)} page={getCover(book)}/>
            </div>

            <div
                className="flex flex-column "
                styleName="desc"
            >

                <div styleName="book-type">
                    {types[book.format]}
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
