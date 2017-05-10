import every from 'lodash/every'
import mapValues from 'lodash/mapValues'
import find from 'lodash/find'
const initialState = {
    name:{value:"",isPristine:true,isValid:true,errorText:""},
    surname:{value:"",isPristine:true,isValid:true,errorText:""},
    gender:{value:"Пол",isPristine:true,isValid:true,errorText:""},
    bookName:{value:"",isPristine:true,isValid:true,errorText:""},
    day:{value:"День",isPristine:true,isValid:true,errorText:""},
    month:{value:"Месяц",isPristine:true,isValid:true,errorText:""},
    year:{value:"Год",isPristine:true,isValid:true,errorText:""},
    age:{value:"Возраст указанный в книге",isPristine:true,isValid:true,errorText:""},
    relation:{value:"Кем приходитесь?",isPristine:true,isValid:true,errorText:""},
    senderName:{value:"",isPristine:true,isValid:true,errorText:""},
    calculatedAge:"",
    dateExists: true,
    isNext:false,
    canCreate:false
}

const forTest = {
    name:{value:"Ильяс",isPristine:false,isValid:true,errorText:""},
    surname:{value:"Малгаждаров",isPristine:false,isValid:true,errorText:""},
    gender:{value:"male",isPristine:false,isValid:true,errorText:""},
    bookName:{value:"",isPristine:true,isValid:true,errorText:""},
    day:{value:"1",isPristine:false,isValid:true,errorText:""},
    month:{value:"Май",isPristine:false,isValid:true,errorText:""},
    year:{value:"1987",isPristine:false,isValid:true,errorText:""},
    age:{value:"today",isPristine:false,isValid:true,errorText:""},
    relation:{value:"Кем приходитесь?",isPristine:true,isValid:true,errorText:""},
    senderName:{value:"",isPristine:true,isValid:true,errorText:""},
    calculatedAge:"30",
    dateExists: true,
    isNext:false,
    canCreate:false
}

let partOne=["name", "surname","gender","day","month","year","age"]
let partTwo=["senderName","relation"]
import * as selector from './selectorForm'
import {data} from '../../../app/shared'

export default (state = forTest, action) => {
  switch (action.type) {
  case 'CHANGE_FORM':
    if(action.isNext){
      let canCreate=false;
      let raw=action.part==="partOne"?partOne:partTwo
      let fields=raw.map(v=>{
        const {isValid,errorText}=selector.validate(state[v].value,v)
        return {isPristine:false,isValid,errorText, fieldType:v,value:state[v].value}
      })
      if(every(mapValues(fields,({isValid})=> isValid)) && state.dateExists){
        //successful path

        if(action.part === "partOne"){
          canCreate=false
        }else{
          canCreate=true
        }
        // console.log("here we go ",canCreate)
        return {
          ...state,
          isNext:true,
          canCreate,

        }
      }else{
        //check if everything is pristine
        let list = raw.reduce((acc,v) => ({...acc,[v]:find(fields,obj=>obj.fieldType===v)}),{})
        canCreate=false
        // console.log("-=-=-=-=-",canCreate)

        return {
          ...state,
          isNext:action.part==="partOne"?false:true,
          canCreate,
          ...list,
        }
      }
    }else{
      return {
        ...state, isNext:false
      }
    }

  case 'ENTER_INPUT':
    const {isValid,errorText} = selector.validate(action.text,action.field)
    return {...state,
      [action.field]:{
        ...state[action.field],
        value:action.text,
        isPristine:false,
        isValid,errorText
      }
    }
  case "CHECK_DATE":
    if(state.day.value==="День"||state.year.value==="Год"||state.month.value==="Месяц"){
        return state
    }else{
        let calculatedAge=""
        let dateExists = selector.isValidDate(state.year.value, data.months[state.month.value], state.day.value)
        if(dateExists){
          calculatedAge=selector.getAge(new Date(state.year.value, data.months[state.month.value], state.day.value))
        }else{
          calculatedAge=""
        }
        return {...state, calculatedAge, dateExists }
    }
  case "CLEAR_GIFT_FORM":
    return initialState
  default:
    return state
  }
}
