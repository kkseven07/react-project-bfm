import React, {Component} from 'react'
import './fruitDNA.css'

const getFruit = (url) => {
    if(url.indexOf("apple")>-1){
        return "apple"
    }else if(url.indexOf("grapes")>-1){
        return"grapes"
    }
    return "pear"
}

export default ({page,book, ...props}) => {
    return   <div className="full" style={{position:'relative',width:props.print&&'98%', height:props.print&&'95%'}}>
        <div
            // style={{paddingTop:props.osName==='Mac'&&'21%' }}
            styleName={`text ${getFruit(page.primary_image.image.url)}`}>
           {book.name.toUpperCase()},
        </div>
    </div>
}