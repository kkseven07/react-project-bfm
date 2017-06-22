import React from 'react'
import './relaxPhoto.css'
export default ({page,book,url}) =>{

    return <div className="full" styleName="r">
        <img  styleName="image" src={url+page.data.image_url}/>
        <div styleName="title">А ВОТ ТАК МЫ ОТДЫХАЛИ!</div>
    </div>
}