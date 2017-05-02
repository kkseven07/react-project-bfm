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
    relation:{value:"Кем приходитесь",isPristine:true,isValid:true,errorText:""},
    senderName:{value:"",isPristine:true,isValid:true,errorText:""},
    calculatedAge:"",
    dateExists: true,
    isNext:false
}

let partOne=["name", "surname"]
import * as selector from './selectorForm'

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_FORM':
    if(action.isNext){
      let fields=partOne.map(v=>{
        const {isValid,errorText}=selector.validate(state[v].value,v)
        return {isPristine:false,isValid,errorText, fieldType:v,value:state[v].value}
      })
      if(every(mapValues(fields,({isValid})=> isValid))){
        //successful path
        return {
          ...state,
          isNext:true
        }
      }else{
        let name=find(fields,(obj)=>obj.fieldType==="name")
        let surname=find(fields,(obj)=>obj.fieldType==="surname")
        return {
          ...state,
          isNext:false,
          name:name,
          surname:surname
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
    if(state.day==="День"||state.year==="Год"||state.month==="Месяц"){
        return state
    }else{
        let calculatedAge=""
        let dateExists = isValidDate(state.year, monthsMap[state.month], state.day)
        if(dateExists){
          calculatedAge=getAge(new Date(state.year, monthsMap[state.month], state.day))
        }else{
          calculatedAge=null
        }
        return {...state, calculatedAge, dateExists }
    }
  case "CLEAR_GIFT_FORM":
    return initialState
  default:
    return state
  }
}
