import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../business/actions/index.js'
import "./cover.css"
import {getBookName, textColor} from '../../shared/utils.js'
class Cover extends Component{


    render(){
        return (
        <div styleName="r"
            style={{background:this.props.color}}>
            <span styleName="text" style={{color:textColor(this.props.color)}}>
             {getBookName(this.props.book.book_name, this.props.book.name)}
            </span>
            <div styleName="line"></div>

        </div>
        );
    }
}

const mapStateToProps = (state) => ({
  color: state.edit.coverColor,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cover)


