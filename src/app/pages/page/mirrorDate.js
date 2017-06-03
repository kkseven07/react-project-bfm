import React from 'react'
import './mirrorDate.css'
import {getDate} from "../../shared/utils.js"

export default ({book}) =>(
    <div className="full" styleName="r">
        <div styleName="date" className="absolute">
            <div styleName="text">
                {getDate(book.dob).day}
            </div>
            <div styleName="text small">
                {getDate(book.dob).monthYa}
            </div>
            <div styleName="text">
                {getDate(book.dob).year}
            </div>
        </div>
    </div>
);
