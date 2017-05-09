import React, {Component} from 'react'
import './scene.css'

export default ({book}) =>(
    <div className="full flex-center" styleName="r">
    	<div>В ГЛАВНЫХ РОЛЯХ</div>
        <div styleName="text-name">{book.name} {book.surname}</div>
    </div>
);
