 import React, { Component } from "react";
import "./film.css";
import { getDate, checkLength } from "../../shared/utils.js";
const setStyle = image_url => {
    if (image_url.match("v1")) return ["date-v1", "film-name-v1"];
    else if (image_url.match("v2")) return ["date-v2", "film-name-v2"];
    else if (image_url.match("v3") || image_url.match("v4"))
        return ["date-v3", "film-name-v3"];
    else return ["no-image", "no-image"];
};
// {setStyle(page.primary_image.image.url)[0].match('v3')?getDate(book.dob).year.substr(2,3):getDate(book.dob).year}
export default ({ page, book, ...props }) => (
    <div className="full " styleName="r" >
        <div
            className="absolute"
            styleName={setStyle(page.primary_image.image.url)[0]}
            style={{top:props.print&&setStyle(page.primary_image.image.url)[0]==='date-v1'&&'18%'}}
        >
            <div styleName="day" style={{ display: "none" }}>
                {getDate(book.dob).day}
            </div>
            <div styleName="month" style={{ display: "none" }}>
                {getDate(book.dob).monthNumber}
            </div>
            <div styleName="year">
                {setStyle(page.primary_image.image.url)[0].match("v3")
                    ? ("" + getDate(book.dob).year).substr(2, 3)
                    : getDate(book.dob).year}
            </div>
        </div>
        <div
            className="absolute"
            styleName={setStyle(page.primary_image.image.url)[1]}
            style={{ fontSize: checkLength(page.data.film, 16, 2, "film") }}
        >
            {page.data.film}
        </div>
    </div>
);
