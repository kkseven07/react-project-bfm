import React from "react";
import "./thanksForMom.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text"
			style={{fontSize:page.data.text&&checkLength(page.data.text, 98, 1.5, "thanksForMom")}}
        >
            {page.data.text?page.data.text.toUpperCase():'за то, что ты лучшая мама в мире!'}
        </div>
    </div>
);