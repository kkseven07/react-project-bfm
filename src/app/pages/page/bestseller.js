import React from 'react'
import './bestseller.css'

export default ({page,book}) =>(
    <div className="full" styleName="r">
        <div styleName="text">
           <div styleName="name">{book.name.toUpperCase()},</div>
           <div styleName="title">{page.data.bestseller.title.toUpperCase()}</div>
           <div styleName="year">БЕСТСЕЛЛЕР {page.data.year} ГОДА</div>
        </div>
    </div>
);
