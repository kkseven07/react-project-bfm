import React, {Component} from 'react'
import './backToHistory.css'

export default ({page,book}) =>(
    <div className="full flex-center" styleName="r">
        <div styleName="date">

        </div>
        <div styleName="facts">
            {page.data.facts.map((fact,i)=>
                (<span key={i}
                    styleName="text">
                    {fact}
                </span>))}
        </div>

    </div>
);
