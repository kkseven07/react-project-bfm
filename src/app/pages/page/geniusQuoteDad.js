import React from "react";
import "./geniusQuoteDad.css";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'Уроки не сделаешь, гулять не пойдешь!'}
        </div>
        <div styleName="mom">ПАПА</div>
    </div>
);
