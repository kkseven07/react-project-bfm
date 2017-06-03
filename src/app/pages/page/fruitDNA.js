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

export default ({page,book}) => {
    return   <div className="full">
        <div
            styleName={`text ${getFruit(page.primary_image.image.url)}`}>
           {book.name.toUpperCase()},
        </div>
    </div>
}
