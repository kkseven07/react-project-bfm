import React, { Component } from "react";
import "./formulaMom.css";
import { checkLength } from "../../shared/utils.js";

export default ({ book, page, ...props }) => {
    return <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="first" className="absolute"
        	style={{fontSize:page.data.text&&checkLength(page.data.text, 10, 1, "formulaMom")}}>{page.data.text?page.data.text:'семья'}</div>
        <div styleName="second" className="absolute"
        	style={{fontSize:page.data.text1&&checkLength(page.data.text1, 10, 1, "formulaMom")}}>{page.data.text1?page.data.text1:"работа"}</div>
        <div styleName="third" className="absolute"
        	style={{fontSize:page.data.text2&&checkLength(page.data.text2, 10, 1, "formulaMom")}}>{page.data.text2?page.data.text2:"ужин"}</div>
    </div>
}
