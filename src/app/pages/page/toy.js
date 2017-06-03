import React, { Component } from "react";
import "./toy.css";

export default ({ book, page, ...props }) => {
    const date = new Date(book.dob);
    return (
        <div className="full" styleName="r">
            <div
                className="absolute"
                styleName="text"
                style={{ color: page.data.meta, top:props.osName==='Mac'&&'17%' }}

            >
                {date.getUTCFullYear()}
            </div>
        </div>
    );
};
