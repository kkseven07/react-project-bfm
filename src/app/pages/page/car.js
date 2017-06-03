import React, { Component } from "react";
import "./car.css";
import {getDate} from './../../shared/utils'
export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="box">
           {getDate(book.dob).year}
        </div>
    </div>
);
