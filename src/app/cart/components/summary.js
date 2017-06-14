import React from "react";
import "./summary.css";

const getWrapPrice = book => {
    return !book.gift_wrap
        ? 0
        : book.format !== "digital" ? 1000 : 0;
};
let prices={
    digital:2900,
    soft19: 9900,
    soft23:11900,
    hard19:14900,
    hard23:16900,
    deluxe:39900,
    fumoney:99000
}
export default ({ book, actions }) => {
    if(!book){
        return null
    }
    let wrapPrice=getWrapPrice(book)
    return (
        <div styleName="r" className="flex full flex-column">

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

            <div
                onClick={() => {
                    actions.deleteFromCache(book.id);
                }}
                className="flex flex-center"
                styleName="delete"
            >
                Удалить из корзины
            </div>

        </div>
    );
};
