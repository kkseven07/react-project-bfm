import React from "react";
import "./prideOfMom.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text"
			style={{fontSize:page.data.text&&checkLength(page.data.text, 30, 3.4, "prideOfMom")}}
        >
            {page.data.text?page.data.text.toUpperCase():'ты самая мудрая!'}
        </div>
    </div>
);
