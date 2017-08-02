import React from "react";
import "./geniusQuoteMom.css";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'Пока суп не сьешь, сладкое не дам!'}
        </div>
        <div styleName="mom">МАМА</div>
    </div>
);
