import React from 'react'
import './framefridge.css'
export default ({page,book,url,print}) =>{

    const print_url="https://www.bookfrom.me"
    return <div className="full" style={{position:'relative'}}>

        {page.data.image_url&&<img  styleName="image" src={(print?print_url:url)+page.data.image_url}/>}
        <div styleName="text">{page.data.text?page.data.text:"Хорошие воспоминания"}</div>
    </div>
}