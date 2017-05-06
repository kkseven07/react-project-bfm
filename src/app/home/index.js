import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import {utils,data} from "../shared"
import BookForm from './components/bookForm'
import Reviews from './components/reviews'
import Footer from './components/footer'
import Gallery from './components/gallery'
export default (props)=>(
    <div
        className="full flex flex-center flex-column"
        >
        <Gallery/>
        <BookForm/>
        <Reviews/>
        <Footer/>

    </div>

)


