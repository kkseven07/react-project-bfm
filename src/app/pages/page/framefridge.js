import React from 'react'
import './framefridge.css'
export default ({page,book,url}) =>{


    return <div className="full flex flex-center">

        <img  styleName="image" src={url+page.data.image_url}/>
    </div>
}