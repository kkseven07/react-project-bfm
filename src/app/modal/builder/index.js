

import React from 'react'
import {Background} from '../../shared'
import "./builder.css"
import { connect } from 'react-redux'
import * as actions from '../../../business/actions'
import { bindActionCreators } from 'redux'
const Modal=({isOpen,page,book,actions})=>{

    console.log("0-0-0-0-0-0-0-0-0-00",page, book, "modal open for",isOpen)
    if(!isOpen){
        return null
    }
    const stopClick=(e)=>{
        e.stopPropagation()
    }

    return <Background close={actions.closeModal} zIndex={"20"} isOpen={isOpen}>

        <div onClick={stopClick} className="flex flex-center" styleName="r">

            Hello {page.type}

        </div>



    </Background>

}


const mapStateToProps = (state) => ({
  isOpen:state.modal.isOpen,
  page:state.modal.page,
  book:state.modal.book
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Modal)