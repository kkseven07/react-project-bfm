import React from 'react'
import './pastPhoto.css'
export default ({page,book,url}) =>{

    return <div className="full" styleName="r">
            <div styleName="zaplatka"></div>
        <img  styleName="image" src={url+page.data.image_url}/>
        <div styleName="title">ВЫ В ПРОШЛОЙ ЖИЗНИ</div>
    </div>
}