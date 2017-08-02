import React from "react";
import "./vice.css";

export default props => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text">
            {props.page.data.text
                ? props.page.data.text.toUpperCase()
                : "Необдуманно болтать".toUpperCase()}
        </div>
    </div>
);
