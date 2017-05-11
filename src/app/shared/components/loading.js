

import React from 'react'
import Background from './background'
import "./loading.css"
import { connect } from 'react-redux'
import * as actions from '../../../business/actions'
import { bindActionCreators } from 'redux'
const Loading=(props)=>{


    return <Background isFetching={props.isFetching} zIndex="25">

        <div className="flex flex-center" styleName="r">

            Hello loading

        </div>



    </Background>

}


const mapStateToProps = (state) => ({
  isFetching:state.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Loading)