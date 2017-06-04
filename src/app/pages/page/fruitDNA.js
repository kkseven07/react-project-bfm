import React, {Component} from 'react'
import './fruitDNA.css'

const getFruit = (url) => {
    if(url.includes("plum")){
        return "plum"
    }else if(url.includes("banana")){
        return"banana"
    }
    return"potato"
}

export default ({page,book, ...props}) => {
    return   <div className="full">
        <div
            style={{paddingTop:props.osName==='Mac'&&'21%' }}
            styleName={`text ${getFruit(page.primary_image.image.url)}`}>
           {book.name.toUpperCase()},
        </div>
    </div>
}
