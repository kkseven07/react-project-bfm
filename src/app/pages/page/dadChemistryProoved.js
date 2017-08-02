import React from "react";
import "./dadChemistryProoved.css";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'ПОТОМУ ЧТО ТЫ ГОТОВИШЬ ЛУЧШЕ ВСЕХ!'}
        </div>
    </div>
);
