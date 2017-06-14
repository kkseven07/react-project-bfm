import React from "react";
import "./option.css";
export default ({ book, name, text, value, enter }) => {
    const check = () => {
        if (name === "format") {
            return book.format.indexOf(value) > -1;
        } else if (name === "size") {
            return book.format.indexOf(value) > -1;
        } else if (name === "wrap") {
            return book.gift_wrap;
        }
    };
    const click = () => {
        enter(name, value, book.id);
    };

    return (
        <div onClick={click} styleName="container" className="flex">
            <div
                style={{
                    background: check() && "#5877ff",
                    borderColor: check()
                        ? "rgb(240,240,240)"
                        : "rgb(200,200,200)"
                }}
                styleName="r"
            />
            <div
                style={{
                    paddingRight: text === "Цифровая версия книги"
                        ? 30
                        : text === "Книга в мягком переплете" ? 15 : 6
                }}
            >
                {text}
            </div>

        </div>
    );
};
