import React from "react";
import "./summary.css";
export default ({ book }) => {
    return (
        <div styleName="r" className="flex full flex-column">

            <div styleName="elem">
                <div className="flex space-between ">
                    <div  style={{fontFamily:"RobotoRegular", color:"rgb(120,120,120)"}}>
                        КНИГА
                    </div>

                    <div style={{fontFamily:"RobotoMedium"}}>
                        {book.order.price}
                    </div>
                </div>

            </div>

            <div styleName="elem">
                <div className="flex space-between ">
                    <div  style={{fontFamily:"RobotoRegular", color:"rgb(120,120,120)"}}>
                        УПАКОВКА
                    </div>

                    <div  style={{fontFamily:"RobotoMedium"}}>
                        0 тг
                    </div>
                </div>
            </div>

            <div styleName="elem price">
                {book.order.price}
            </div>

            <div className="flex flex-center" styleName="delete">
                Удалить из корзины
            </div>

        </div>
    );
};
