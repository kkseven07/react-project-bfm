import React from 'react'
import "./book.css"
import { connect } from 'react-redux'
import {utils} from '../../shared'
const getFontSize=(str)=>{
    if(str.length>9&&str.length<15){
        return "0.8em"
    }else if(str.length>=15 && str.length<20){
        return "0.6em"
    }else if(str.length>=20 && str.length<27){
        return "0.45em"
    }
    else if(str.length>=27){
        return "0.4em"
    }
    else{
        return "1em"
    }
}
const Book=({bookName, name})=>{
    const result = utils.getBookName(bookName,name)
    const toRender=utils.getBookName(bookName,name)
    let fontSize="1em"

    if(result instanceof Array){
        result.sort((a,b)=>b.length-a.length)
        fontSize=getFontSize(result[0])
    }else{
        fontSize=getFontSize(result)
    }
    return <div styleName="r" className="flex app-blue">
        <div style={{fontSize:fontSize,fontFamily:"BebasBold"}}>

        {toRender}
        </div>
    </div>
}


const mapStateToProps = (state) => ({
  name: state.form.name.value,
  bookName:state.form.bookName.value
})


export default connect(mapStateToProps)(Book)