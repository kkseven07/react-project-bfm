import React from 'react'
import './sport.css'

export default ({page,book}) =>(
    <div className="full flex" styleName="r">
        <span styleName="year">{page.data.year}</span>
        <div styleName="container">

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
    </div>
);
