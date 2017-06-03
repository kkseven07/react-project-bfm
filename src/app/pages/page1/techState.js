import React from "react";
import "./techState.css";
import { cutString } from "../../shared/utils.js";

export default ({ page }) => (
    <div className="full" styleName="r">
        <div styleName="fact">{cutString(page.data.tech + "", 240)}</div>
        <div styleName="year">{page.data.year}</div>
    </div>
);
