import React from 'react'
import { Route, withRouter, Redirect} from 'react-router-dom'
import {MemoryRouter} from 'react-router'
import {Button,Input, Select, ErrorText} from '../../shared'
import './form.css'
import { connect } from 'react-redux'
import * as actions from '../../../business/actions'
import { bindActionCreators } from 'redux'
import range from 'lodash/range'
import {data} from '../../shared'
const getData = (field)=>{
    if(field==="day"){
        return range(1,32)
    }else if(field==="year"){
        return range(2010,1939,-1)
    }else{
        return data.monthsList
    }
}
const PartOne = ({form,...props}) => {
    return <div className="flex flex-center flex-column"
     styleName="form">
        <Input
            placeholder="Имя"
            field={form.name}
            fieldType={"name"}
            enter={props.actions.enterInput}
        />
        <ErrorText text={form.name.errorText}/>
        <Input
            placeholder="Фамилия"
            field={form.surname}
            fieldType={"surname"}
            enter={props.actions.enterInput}
        />
        <ErrorText text={form.surname.errorText}/>

        <Select
            default="Пол"
            values={["female","male"]}
            options={["Женский","Мужской"]}
            field={form.gender}
            fieldType={"gender"}
            enter={props.actions.enterInput}
        />
        <ErrorText text={form.gender.errorText}/>

        <div className="flex width-full">
            <div styleName="day">
                <Select
                    default="День"
                    values={getData("day")}
                    options={getData("day")}
                    field={form.day}
                    fieldType={"day"}
                    enter={props.actions.enterInput}
                />
            </div>
            <div styleName="month">
                <Select
                    default="Месяц"
                    values={getData("month")}
                    options={getData("month")}
                    field={form.month}
                    fieldType={"month"}
                    enter={props.actions.enterInput}
                />

            </div>
            <div styleName="year">
                <Select
                    values={getData("year")}
                    default="Год"
                    options={getData("year")}
                    field={form.year}
                    fieldType={"year"}
                    enter={props.actions.enterInput}
                />
            </div>

        </div>
        <ErrorText text={form.month.errorText||form.day.errorText||form.year.errorText}/>
        <Select
            values={["today", "next"]}
            default="Возраст указанный в книге"
            options={[`Возраст сегодня ${form.calculatedAge&&" ("+form.calculatedAge+")"}`,
                `Возраст в следующий день рождения ${form.calculatedAge&&" ("+(parseInt(form.calculatedAge)+1)+")"}`]}
            field={form.age}
            fieldType={"age"}
            enter={props.actions.enterInput}
        />

            <ErrorText text={form.age.errorText}/>

        <div className="width-full" style={{margin:3}}>{!form.dateExists&&"Данной даты не существует"}</div>

        <div className="flex width-full" >
            <Button click={()=>props.actions.changeForm(true)}>Продолжить</Button>
        </div>

    </div>
}

const PartTwo = ({form,...props}) => {

    return  <div className="flex flex-center flex-column" styleName="form"
     >
            <Input
                field={form.senderName}
                style=""
                fieldType={"senderName"}
                enter={props.actions.enterInput}
            />
            <div style={{margin:5}}>{form.senderName.errorText}</div>
            <Input
                field={form.bookName}
                style=""
                fieldType={"bookName"}
                enter={props.actions.enterInput}
            />
            <div style={{margin:5}}>{form.bookName.errorText}</div>

            <div className="flex width-full space-between">

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









