import React from "react";
import "./musicHit.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book }) => (
    <div className="full flex-center" styleName="r">
        <div className="absolute" styleName="artist">Beatles</div>
        <div
            className="absolute"
            styleName="single"
            style={{ fontSize: checkLength(page.data.single, 31, 1) }}
        >
            {page.data.single.substring(1, page.data.single.length - 2)}
        </div>
    </div>
);
