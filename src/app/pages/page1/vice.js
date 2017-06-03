import React from "react";
import "./vice.css";

export default props => (
    <div className="full" styleName="r">
        <div styleName="text">
            {props.page.data.text?props.page.data.text.toUpperCase():"Необдуманно болтать".toUpperCase()}
        </div>
    </div>
);
