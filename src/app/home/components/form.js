import React from 'react'
import {Button,Input, Select, ErrorText,DescText,DescSmall} from '../../shared'
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
        <DescText text="Для кого эта книга?"/>
        <div style={{margin:3,marginTop:0}}/>
        <DescSmall text="Детали будут использованы для создания книги"/>
        <div style={{margin:6}}/>
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
        <div style={{marginTop:15}}/>
        <DescText text="Дата рождения"/>
        <div style={{margin:5}}/>
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
        {!form.dateExists&&<ErrorText text={"Данной даты не существует"}/>}
        {form.dateExists&&<ErrorText text={form.month.errorText||form.day.errorText||form.year.errorText}/>}

        <Select
            values={["today", "next"]}
            default="Возраст указанный в книге"
            options={[`Возраст сегодня ${form.calculatedAge&&" ("+form.calculatedAge+")"}`,
                `На следующий день рождения ${form.calculatedAge&&" ("+(parseInt(form.calculatedAge)+1)+")"}`]}
            field={form.age}
            fieldType={"age"}
            enter={props.actions.enterInput}
        />

        <ErrorText text={form.age.errorText}/>

        <div className="flex width-full" >
            <Button click={()=>props.actions.changeForm(true, "partOne")}>Продолжить</Button>
        </div>

    </div>
}

class PartTwo extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.canCreate&&nextProps.canCreate){
            this.props.actions.createBook(this.gift,this.props.history)
        }
    }

    render(){
        const {form,canCreate,...props,}=this.props
        this.gift = {
            name:form.name.value,
            surname:form.surname.value,
            gender:form.gender.value,
            bookName:form.bookName.value,
            day:form.day.value,
            month:form.month.value,
            year:form.year.value,
            age:form.age.value,
            relation:form.relation.value,
            senderName:form.senderName.value,
            calculatedAge:parseInt(form.calculatedAge)
        }
        let create=()=>{props.actions.changeForm(true,"partTwo")}
        return  <div className="flex flex-center flex-column" styleName="form"
         >
                <DescText text="От кого эта книга?"/>
                <div style={{margin:10,marginTop:0}}/>
                <Input
                    field={form.senderName}
                    style=""
                    placeholder="Оби Ван Кеноби"
                    fieldType={"senderName"}
                    enter={props.actions.enterInput}
                />
                <ErrorText text={form.senderName.errorText}/>
                <Input
                    field={form.bookName}
                    style=""
                    placeholder="Название книги (можно оставить пустым)"
                    fieldType={"bookName"}
                    enter={props.actions.enterInput}
                />
                <ErrorText text={form.bookName.errorText}/>
                 <div style={{margin:15}}/>
                <DescText text="Отношение"/>
                <div style={{margin:3,marginTop:0}}/>
                <DescSmall text={`Кем вы приходитесь человеку по имени ${form.name.value}`}/>
                 <div style={{margin:6}}/>
                 <Select
                    values={["collegue", "friend","relative","married"]}
                    default="Кем приходитесь?"
                    options={["Коллеги","Друзья", "Родственники",
                        form.gender.value==="male"?"Супруга":"Супруг",
                        ]}
                    field={form.relation}
                    fieldType={"relation"}
                    enter={props.actions.enterInput}
                 />

                <ErrorText text={form.relation.errorText}/>

                <div className="flex width-full space-between">

                    <Button click={()=>props.actions.changeForm(false)}>Назад</Button>
                    <Button click={()=>create()}>Создать книгу</Button>
                </div>
            </div>

    }

}


const Form = ({form:{isNext,...props,canCreate},actions,history})=>{
    return isNext?<PartTwo canCreate={canCreate} history={history} actions={actions} form={props}/>:<PartOne actions={actions} form={props}/>
}

const mapStateToProps = (state) => ({
  form: state.form
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Form)









