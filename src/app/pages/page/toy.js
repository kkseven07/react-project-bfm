import React, { Component } from "react";
import "./toy.css";

export default ({ book, page, ...props }) => {
    //("OS", props.osName)
    const date = new Date(book.dob);
    return (
        <div className="full" styleName="r">
            <div
                className="absolute"
                styleName="text"
                style={{ color: page.data.meta, top:props.osName==='Mac'&&'18%' }}

            >
                {date.getFullYear()}
            </div>
        </div>
    );
};
