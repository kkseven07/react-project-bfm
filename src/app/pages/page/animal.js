import React from "react";
import "./animal.css";
import { cutString, checkLength } from "../../shared/utils.js";

export default ({ page, book }) => {
    // //("GO", "qwe (x)".split("("), "qwe(x)".match('('))
    let text = page.data.animal.description
     text = text.substring(0,text.indexOf("["))+text.substring(text.indexOf("]")+1, text.length)

    return <div className="full" styleName="r">
        <div  styleName="first">
            <div styleName="big">{page.data.year} </div>
            <div styleName="little" style={{fontSize:checkLength(page.data.animal.name, 15, 0.8)}}>{page.data.animal.name}</div>
        </div>
        <div styleName="second">
                {cutString(text,400)}
        </div>

    </div>
}
