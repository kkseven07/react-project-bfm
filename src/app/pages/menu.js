import React from "react";
import "./menu.css";

export default ({ book, actions, history }) => {
    return (
        <div styleName="r" className="fixed">
            <div className="flex flex-center width-full">
                <div className="flex flex-center" styleName="elem">
                    <div
                        onClick={() => {
                            history.push("/");
                        }}
                        className="flex flex-start"
                        styleName="box"
                    >
                        НАЗАД
                    </div>
                    <div
                        onClick={() => {
                            actions.openModal({ type: "info" }, book);
                        }}
                        className="flex flex-center"
                        styleName="box"
                    >
                        ИНСТРУКЦИЯ
                    </div>
                    <div
                        onClick={() => {
                            history.push("/cart");
                        }}
                        className="flex flex-end"
                        styleName="box"
                    >
                        ЗАКАЗАТЬ
                    </div>
                </div>
            </div>
        </div>
    );
};
