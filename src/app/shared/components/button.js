import React, { Component } from "react";
import "./button.css";

const Button = ({ click, children, width }) => (
    <div
        onClick={e => {
            e.preventDefault();
            click();
        }}
        styleName="root"
        style={width&&{width}}
        className="flex flex-center"
    >
        <span styleName="text">{children}</span>
    </div>
);

export default Button;
