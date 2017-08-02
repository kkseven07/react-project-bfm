import React, { Component } from "react";
import "./car.css";
import {getDate} from './../../shared/utils'
export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="box">
           {getDate(book.dob).year}
        </div>
    </div>
);
