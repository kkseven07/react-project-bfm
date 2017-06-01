import React from "react";
import "./option.css";
export default ({ text, bookVersion, value, name, color, type }) => {
    const click = () => {
        bookVersion(name,type);
    };
    return (
        <div onClick={click} styleName="container" className="flex">
            <div
                style={{
                    background: value === name && "#5877ff",
                    borderColor: value === name
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
