import React from 'react'
import "./errorText.css"
export default ({text})=>(<div  className="width-full" style={{margin:text===""?8:5,marginLeft:0}} styleName="r">{text}</div>)