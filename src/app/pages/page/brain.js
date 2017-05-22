import React, { Component } from "react";
import "./brain.css";
import { checkLength } from "../../shared/utils.js";
const first = "Компьютер";
const second ="Девушки";
const third ="Воллейбол";
export default ({ book, page }) => (
    <div className="full" styleName="r">
        <div styleName="first" className="absolute"
            style={{fontSize:checkLength(first, 16, 1.2)}}>{first}</div>
        <div styleName="second" className="absolute"
            style={{fontSize:checkLength(second, 15, 1.2)}}>{second}</div>
        <div styleName="third" className="absolute"
            style={{fontSize:checkLength(third, 10, 1.2)}}>{third}</div>
    </div>
);