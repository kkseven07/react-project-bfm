

import React from 'react'

export default ({field:{value},options})=>{


    return <select value={value}
                    onChange={props.enter}
                    styleName={props.style}>
                {[props.options.map((val,i)=>{
                    if(i===0){
                        return <option key={i} disabled>{val}</option>
                    }else{
                        return  <option key={i} value={value}>{val}</option>
                    }
                })]}

               </select>
}