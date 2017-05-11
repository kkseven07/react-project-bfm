import React, {Component} from 'react'
import './backToHistory.css'

export default ({page,book}) =>(
    <div className="full flex-center" styleName="r">
        <div styleName="date">
            <img styleName="image" src={"http://localhost:4000"+page.images[0].url}/>
            <img styleName="image" src={"http://localhost:4000"+page.images[1].url}/>
            <img styleName="image small" src={"http://localhost:4000"+page.images[4].url}/>
            <img styleName="image" src={"http://localhost:4000"+page.images[2].url}/>
            <img styleName="image" src={"http://localhost:4000"+page.images[3].url}/>
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
