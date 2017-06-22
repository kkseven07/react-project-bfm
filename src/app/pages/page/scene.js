import React, {Component} from 'react'
import './scene.css'

export default ({book}) =>(
    <div className="full" styleName="r">
        <div styleName="text-name">{book.name} </div>
    </div>
);