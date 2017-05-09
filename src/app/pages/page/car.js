

import React, {Component} from 'react'
import './car.css'


export default ({page}) =>(
    <div className="full" styleName="r">
        <div styleName="box">
            <img styleName="image" src={page.images[0].url}/>
            <img styleName="image" src={page.images[1].url}/>
            <img styleName="image" src={page.images[2].url}/>
            <img styleName="image" src={page.images[3].url}/>
        </div>
    </div>
);
