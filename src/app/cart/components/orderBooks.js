import React from "react";
import "./orderBooks.css";
import values from "lodash/values";
import reverse from "lodash/reverse";
import { getBookName, textColor } from "../../shared/utils.js";
import Summary from "./summary";

const getCover = book => {
    let data = values(book.pages);
    return data.filter(v => v.type === "cover")[0];
};

const getWrapPrice = book => {
    return !book.gift_wrap
        ? 0
        : book.format !== "digital" ? 1000 : 0;
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

let prices={
    digital:2900,
    soft19: 9900,
    soft23:11900,
    hard19:14900,
    hard23:16900,
    deluxe:39900,
    fumoney:99000
}


export default ({ book, history, edit }) => {
    let color = getCover(book).data;
    let wrapPrice=getWrapPrice(book)
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

                <div styleName="book-info" >
                    <div style={{marginBottom:'1px'}}>{types[book.format]}</div>
                    <div styleName="elem">
                        <div className="flex space-between ">
                            <div
                                style={{
                                    fontFamily: "RobotoRegular",
                                    color: "rgb(120,120,120)"
                                }}
                            >
                                КНИГА
                            </div>

                            <div style={{ fontFamily: "RobotoMedium" }}>
                                {prices[book.format]} тг
                            </div>
                        </div>

                    </div>

                    <div styleName="elem">
                        <div className="flex space-between ">
                            <div
                                style={{
                                    fontFamily: "RobotoRegular",
                                    color: "rgb(120,120,120)"
                                }}
                            >
                                УПАКОВКА
                            </div>

                            <div style={{ fontFamily: "RobotoMedium" }}>
                                {wrapPrice}
                                {" "}
                                тг
                            </div>
                        </div>
                    </div>

                    <div styleName="elem price">
                        {prices[book.format]+wrapPrice} тг
                    </div>
                </div>

            </div>

        </div>
    );
};