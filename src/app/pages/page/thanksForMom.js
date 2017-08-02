import React from "react";
import "./thanksForMom.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text"
			style={{fontSize:page.data.text&&checkLength(page.data.text, 98, 1.5, "thanksForMom")}}
        >
            {page.data.text?page.data.text.toUpperCase():'за то, что ты лучшая мама в мире!'}
        </div>
    </div>
);
