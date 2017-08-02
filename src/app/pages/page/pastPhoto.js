import React from 'react'
import './pastPhoto.css'
export default ({page,book,url, print,digital}) =>{
    const print_url="https://www.bookfrom.me"
    return <div className="full" styleName="r" >
            <div styleName="zaplatka" ></div>
        {page.data.image_url&&<img  styleName="image" src={(print||digital?print_url:url)+page.data.image_url}/>}

        <div styleName="title" className="flex flex-center">{page.data.text?page.data.text:"ВЫ В ПРОШЛОЙ ЖИЗНИ"}</div>
    </div>
}