

import React from 'react'
import {fieldStyle} from "../utils"

export default ({field:{value ,isPristine,isValid},options,...props})=>{
    return <select value={value}
                onChange={(e)=>props.enter(e.target.value,props.fieldType)}
                className={fieldStyle(isPristine,isValid)}
                styleName={props.style||""}>
                    <option disabled>{value}</option>
                {[options.map((val,i)=>{
                    return  <option key={i} value={val}>{val}</option>
                })]}

               </select>
}