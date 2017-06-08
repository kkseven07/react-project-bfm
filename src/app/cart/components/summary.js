import React from "react";
import "./summary.css";

const getWrapPrice = order => {
    return order.data.gift_wrap === ""
        ? 0
        : order.type !== "digital" ? 1000 : 0;
};
export default ({ book, actions }) => {
    if(!book.order.data){
        return null
    }
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
                        {book.order.data.book_price} тг
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
                        {getWrapPrice(book.order)}
                        {" "}
                        тг
                    </div>
                </div>
            </div>

            <div styleName="elem price">
                {parseInt(book.order.data.book_price)+getWrapPrice(book.order)} тг
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
