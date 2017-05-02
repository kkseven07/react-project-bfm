import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import {utils,data} from "../shared"
import BookForm from './components/bookForm'
import home from './home.css'
 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

export default (props)=>(
    <div
        className="flex flex-center full"
        >
        <BookForm/>
    </div>

)


