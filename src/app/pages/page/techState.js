import React from "react";
import "./techState.css";
import { cutString } from "../../shared/utils.js";

export default ({ page, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
    	<div styleName="title">НАУКА</div>
        <div styleName="fact">{cutString(page.data.tech + "", 245)}</div>
        <div styleName="year">{page.data.year}</div>
    </div>
);
