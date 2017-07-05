import React from "react";
import "./bestseller.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
            <div styleName="title" style={{marginBottom:'2px'}}>
                {page.data.bestseller.title.toUpperCase()}
            </div>
            <div styleName="year">БЕСТСЕЛЛЕР {page.data.year} ГОДА</div>
    </div>
);
