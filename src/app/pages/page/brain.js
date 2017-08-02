import React, { Component } from "react";
import "./brain.css";
import { checkLength } from "../../shared/utils.js";

export default ({ book, page, ...props }) => {
    return <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
    	<div styleName="thinkabout">О чём думает {book.name}?</div>
        <div styleName="first" className="absolute"
        	style={{fontSize:page.data.text&&checkLength(page.data.text, 16, 1.2)}}>{page.data.text?page.data.text:'еда'}</div>
        <div styleName="second" className="absolute"
        	style={{fontSize:page.data.text1&&checkLength(page.data.text1, 15, 1.2)}}>{page.data.text1?page.data.text1:"сон"}</div>
        <div styleName="third" className="absolute"
        	style={{fontSize:page.data.text2&&checkLength(page.data.text2, 9, 1.2)}}>{page.data.text2?page.data.text2:"работа"}</div>
    </div>
}
