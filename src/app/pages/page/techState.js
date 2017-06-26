import React from "react";
import "./techState.css";
import { cutString } from "../../shared/utils.js";

export default ({ page }) => (
    <div className="full" styleName="r">
    {console.log("fact", page.data.tech)}
    	<div styleName="title">НАУКА</div>
        <div styleName="fact">{cutString(page.data.tech + "", 260)}</div>
        <div styleName="year">{page.data.year}</div>
    </div>
);
