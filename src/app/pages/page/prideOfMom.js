import React from "react";
import "./prideOfMom.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text"
			style={{
				fontSize:page.data.text&&checkLength(page.data.text, 30, 3, "prideOfMom"),
				color:book.relation==='mom_s'&&'#45a77e'
			}}
        >
            {page.data.text?page.data.text.toUpperCase():'ты самая мудрая!'}
        </div>
    </div>
);
