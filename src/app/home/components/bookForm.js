import React from 'react'
import './bookForm.css'
import Form from './form'
import Book from './book'
export default (props)=>{


    return <div className="full flex flex-center flex-wrap" styleName="r">
        <div className="flex flex-center"
            styleName="book-form" >
            <Book/>

        </div>
        <div className="flex flex-center"
            styleName="book-form form" >
            <Form/>
        </div>


    </div>
}