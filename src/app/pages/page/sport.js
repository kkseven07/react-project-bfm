import React from 'react'
import './sport.css'

export default ({page,book}) =>(
    <div className="full flex flex-center" styleName="r">
        {page.data.year}
        {page.data.sports
            .sort((obj1,obj2)=> obj1.fact.length<obj2.fact.length)
            .map((obj,i)=>{
            const {type, fact} = obj
            return <div key={i} styleName="sport">
                <div styleName="type">{type}</div>
                <div styleName="fact">{fact}</div>
            </div>
        })}
    </div>
);
