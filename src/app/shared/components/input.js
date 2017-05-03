import React from 'react'
import './input.css'
import {fieldStyle} from "../utils"


export default ({field:{value, isPristine,isValid,errorText},enter,...props})=>{
    return <input onChange={(e)=>enter(e.target.value,props.fieldType)}
            className={fieldStyle(isPristine,isValid)}
            styleName={props.style||""}
            type="text"
            // maxLength={}
            value = {value}
            placeholder={props.placeholder}/>
}