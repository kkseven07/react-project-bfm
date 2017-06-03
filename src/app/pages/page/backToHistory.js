import React, {Component} from 'react'
import './backToHistory.css'
import {getDate} from '../../shared/utils.js'
export default ({page,book}) =>(
    <div className="full flex-center" styleName="r">
        <div styleName="date">
            <div styleName="gradient">{getDate(book.dob).day}</div>
            <div styleName="gradient">{getDate(book.dob).monthNumber}</div>

            <div className="absolute" styleName="dot gradient">.</div>
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
