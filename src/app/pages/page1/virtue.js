import React from "react";
import "./virtue.css";

export default props => (
    <div className="full" styleName="r">
        <div className="absolute" styleName="text">
            {props.page.data.text?props.page.data.text.toUpperCase():"упорны".toUpperCase()}
        </div>
    </div>
);
