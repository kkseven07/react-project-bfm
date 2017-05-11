

import React from 'react'
import Background from './background'
import "./loading.css"
import { connect } from 'react-redux'
import * as actions from '../../../business/actions'
import { bindActionCreators } from 'redux'
// var Loader = require('halogen/GridLoader');
// import Confetti from 'react-confetti'
// import Confetti from 'react-dom-confetti';
const Loading=(props)=>{

    return <Background isFetching={props.isFetching} zIndex="25">
        <div className="flex flex-center" styleName="r">
            Создается книга "{props.bookName.trim()===""?props.name:props.bookName}"
        </div>
    </Background>

}


const mapStateToProps = (state) => ({
  isFetching:state.loading,
  name:state.form.name.value,
  bookName:state.form.bookName.value
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Loading)