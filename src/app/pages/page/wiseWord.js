 import React, { Component } from "react";
import "./wiseWord.css";
import { checkLength } from "../../shared/utils.js";
const setStyle = image_url => {
    if (image_url.match("v1")) return ["text-v1", 110, 1.6, 'wise'];
    else if (image_url.match("v2")) return ["text-v2", 110 ,1.6, 'wise1'];
    else return ["no-image", "no-image"];
};
export default ({ page, book, ...props }) => {
    const nstyle = setStyle(page.primary_image.image.url)
    return <div className="full " styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div
            styleName={nstyle[0]}
            style={{fontSize:page.data.text&&checkLength(page.data.text, nstyle[1], nstyle[2], nstyle[3] )}}>
            {page.data.text?page.data.text:"Лучшие вещи на земле остаются недосказанными"}
        </div>

    </div>
}
