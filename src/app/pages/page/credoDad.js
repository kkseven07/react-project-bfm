import React from "react";
import "./credoDad.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text"
        >
            {page.data.text?page.data.text.toUpperCase():'Любой может стать отцом, но только особенный становится папой.'}
        </div>
        <div styleName="author">{page.data.text1?page.data.text1:"Народная мудрость"}</div>
    </div>
);
