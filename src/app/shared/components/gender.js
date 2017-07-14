import '../../home/components/form.css'
import React from "react";
export default ({props})=>{
    return <div styleName="gender" className="flex">
        <div>Пол</div>
        <div className="flex">
            <div styleName="option male"
                onClick={()=>props.actions.setGender("male")}    
            >Male </div>
            <div styleName="option female"
                onClick={()=>props.actions.setGender("female")}
            >Female </div>
        </div>
    </div>
}