import React, { Component } from "react";
import "./scene.css";

export default ({ book, ...props }) => (
    <div
        className="full"
        styleName="r"
        style={{ width: props.print && "98%", height: props.print && "95%" }}
    >
        <div
            styleName="text-name"
            style={{ fontSize: book.name.indexOf(" ") > -1 && "2.5em" }}
        >
            {book.name}{" "}
        </div>
    </div>
);
