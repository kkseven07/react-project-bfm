import React from "react";
import "./geniusQuoteMom.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'Пока суп не сьешь, сладкое не дам!'}
        </div>
        <div styleName="mom">МАМА</div>
    </div>
);
