import React from "react";
import "./credoMom.css";

export default ({ page, book, ...props }) => (
    <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="text"
        >
            {page.data.text?page.data.text.toUpperCase():'Мать - это не тот человек, которого следует опасаться, но тот человек, который делает чувство опасения ненужным!'}
        </div>
        <div styleName="author">{page.data.text1?page.data.text1:"Д. Кенфилд"}</div>
    </div>
);
