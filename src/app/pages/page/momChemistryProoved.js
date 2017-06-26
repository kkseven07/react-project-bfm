import React from "react";
import "./momChemistryProoved.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text">
            {page.data.text?page.data.text.toUpperCase():'ПОТОМУ ЧТО ТЫ ГОТОВИШЬ ЛУЧШЕ ВСЕХ!'}
        </div>
    </div>
);
