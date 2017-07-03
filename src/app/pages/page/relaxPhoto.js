import React from 'react'
import './relaxPhoto.css'
export default ({page,book,url, print}) =>{
    const print_url="https://www.bookfrom.me"

    return <div className="full" styleName="r">
        {page.data.image_url&&<img  styleName="image" src={(print?print_url:url)+page.data.image_url}/>}
        <div styleName="title" className="flex flex-center">{page.data.text?page.data.text:"А ВОТ ТАК МЫ ОТДЫХАЛИ!"}</div>
    </div>
}