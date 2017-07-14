import '../../home/components/form.css'
import React from "react";

export default ({props})=> {
    return <div styleName="current-age" className="flex">
        <div>Возраст в книге</div>
        <div className="flex">
            <div styleName="age-option">Today </div>
            <div styleName="age-option">On birthday </div>
        </div>
    </div>
}