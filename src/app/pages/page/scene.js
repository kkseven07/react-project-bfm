import React, {Component} from 'react'
import './scene.css'

export default ({book}) =>(
    <div className="full" styleName="r">
        <div styleName="text-name" style={{fontSize:book.name.indexOf(" ")>-1&&'2.5em'}}>{book.name} </div>
    </div>
);