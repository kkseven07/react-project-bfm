import React from "react";
import "./prideOfDad.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text" 
			style={{
				fontSize:page.data.text&&checkLength(page.data.text, 30, 3.4, "prideOfMom"),
				color:book.relation==='dad_s'&&'#3b565f'
			}}
        > 
            {page.data.text?page.data.text.toUpperCase():'ты самый мудрый!'}
        </div>
    </div>
);
