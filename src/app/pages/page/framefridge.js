import React from 'react'
import './framefridge.css'
export default ({page,book,url}) =>{


    return <div className="full" style={{position:'relative'}}>

        {url+page.data.image_url?<img  styleName="image" src={url+page.data.image_url}/>:
            <img src="" alt=""/>
        }
        <div styleName="text">{page.data.text?page.data.text:"Хорошие воспоминания"}</div>
    </div>
}