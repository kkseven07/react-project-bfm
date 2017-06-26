import React from "react";
import "./geniusQuoteDad.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'Уроки не сделаешь, гулять не пойдешь!'}
        </div>
        <div styleName="mom">ПАПА</div>
    </div>
);
