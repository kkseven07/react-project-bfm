import React from 'react'
import { Route, withRouter, Redirect} from 'react-router-dom'
import {MemoryRouter} from 'react-router'
import {Button,Input} from '../../shared'
import './form.css'
import { connect } from 'react-redux'
import * as actions from '../../../business/actions'
import { bindActionCreators } from 'redux'

const PartOne = ({form,...props}) => {
    console.log(form)
    return <div
    style={{height:300}} styleName="form">
        <Input
            field={form.name}
            style=""
            fieldType={"name"}
            enter={props.actions.enterInput}
        />
        <div style={{margin:10}}>{form.name.errorText}</div>
        <Input
            field={form.surname}
            style=""
            fieldType={"surname"}
            enter={props.actions.enterInput}
        />
        <div style={{margin:10}}>{form.surname.errorText}</div>

        <Button click={()=>props.actions.changeForm(true)}>Продолжить</Button>


    </div>
}

const PartTwo = ({form,...props}) => {

    return  <div styleName="form"
    style={{height:300}} >
        <Input
            field={form.senderName}
            style=""
            fieldType={"senderName"}
            enter={props.actions.enterInput}
        />
        <div style={{margin:10}}>{form.senderName.errorText}</div>
        <Input
            field={form.bookName}
            style=""
            fieldType={"bookName"}
            enter={props.actions.enterInput}
        />
        <div style={{margin:10}}>{form.bookName.errorText}</div>

        <div className="flex">

            <Button click={()=>props.actions.changeForm(false)}>Назад</Button>
            <Button click={()=>props.actions.changeForm(false)}>Создать книгу</Button>
        </div>
        </div>
}


const Form = ({form:{isNext,...props},actions})=>{
    return isNext?<PartTwo actions={actions} form={props}/>:<PartOne actions={actions} form={props}/>
}


const mapStateToProps = (state) => ({
  form: state.form
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Form)









