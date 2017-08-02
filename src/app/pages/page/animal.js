import "./animal.css";
import React from "react";

import { cutString, checkLength } from "../../shared/utils.js";

export default ({ page, book, ...props }) => {
    let text = page.data.animal.description
     text = text.substring(0,text.indexOf("["))+text.substring(text.indexOf("]")+1, text.length)

    return <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div  styleName="first">
            <div styleName="big">{page.data.year} </div>
            <div styleName="little" style={{fontSize:checkLength(page.data.animal.name, 17, 0.8)}}>{page.data.animal.name}</div>
        </div>
        <div styleName="second">
                {cutString(text,400)}
        </div>

    </div>
}
