import mapValues from "lodash/mapValues";
import find from "lodash/find";
import every from "lodash/every"
export const months = [
   "Январь",
   "Февраль",
   "Март",
   "Апрель",
   "Май",
   "Июнь",
   "Июль",
   "Август",
   "Сентябрь",
   "Октябрь",
   "Ноябрь",
   "Декабрь"
];
const init = {
   name: { value: "", isPristine: true, isValid: true, errorText: "" },
   surname: { value: "", isPristine: true, isValid: true, errorText: "" },
   gender: { value: "Пол", isPristine: true, isValid: true, errorText: "" },
   bookName: { value: "", isPristine: true, isValid: true, errorText: "" },
   day: { value: "День", isPristine: true, isValid: true, errorText: "" },
   month: { value: "Месяц", isPristine: true, isValid: true, errorText: "" },
   year: { value: "Год", isPristine: true, isValid: true, errorText: "" },
   age: {
      value: "today",
      isPristine: true,
      isValid: false,
      errorText: ""
   },
   relation: {
      value: "you",
      isPristine: true,
      isValid: true,
      errorText: ""
   },
   sondaug: {
      value: "Son",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   senderName: { value: "", isPristine: true, isValid: true, errorText: "" },
   calculatedAge: "",
   dateExists: true,
   isNext: false,
   verifyed: false,
   canCreate: false,
   captchaPristine: true
};

const forTest = {
   name: { value: "Оби Ван", isPristine: false, isValid: true, errorText: "" },
   surname: {
      value: "",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   gender: { value: "male", isPristine: false, isValid: true, errorText: "" },
   bookName: { value: "", isPristine: true, isValid: true, errorText: "" },
   day: {
      value: Math.floor(Math.random() * (28 - 1)) + 1 + "",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   sondaug: {
      value: "Кем приходитесь?",
      isPristine: true,
      isValid: true,
      errorText: ""
   },
   month: {
      value: months[Math.floor(Math.random() * 11)],
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   year: {
      value: Math.floor(Math.random() * (2010 - 1940)) + 1940 + "",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   age: { value: "today", isPristine: false, isValid: true, errorText: "" },
   relation: {
      value: "you",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   senderName: {
      value: "Luke",
      isPristine: false,
      isValid: true,
      errorText: ""
   },
   calculatedAge: "30",
   dateExists: true,
   isNext: false,
   canCreate: false,
   verifyed: true,
   captchaPristine: true
};

let partOne = [
   "name",
   "gender",
   "day",
   "month",
   "year",
   "senderName",
   "sondaug",
   "age"
];

const initsondaug = {
   value: "Кем приходитесь?",
   isPristine: true,
   isValid: true,
   errorText: ""
};
let partTwo = ["senderName", "relation"];
import * as selector from "./selectorForm";
import { data } from "../../../app/shared";

export default (state = init, action) => {
   switch (action.type) {
      case "CHANGE_FORM":
         if (action.isNext) {
            let canCreate = false;
            let raw = action.part === "partOne" ? partOne : partTwo;
            let fields = raw.map(v => {
               const { isValid, errorText } = selector.validate(
                  state[v].value,
                  v
               );
               return {
                  isPristine: false,
                  isValid,
                  errorText,
                  fieldType: v,
                  value: state[v].value,
                  inputEntered: true
               };
            });
            if (
               every(mapValues(fields, ({ isValid }) => isValid)) &&
               state.dateExists
               // && state.verifyed
            ) {
               //successful path
               canCreate = true;
               return {
                  ...state,
                  isNext: true,
                  canCreate,
                  inputEntered: false
               };
            } else {
               //check if everything is pristine
               let list = raw.reduce(
                  (acc, v) => ({
                     ...acc,
                     [v]: find(fields, obj => obj.fieldType === v)
                  }),
                  {}
               );

               canCreate = false;
               return {
                  ...state,
                  captchaPristine: false,
                  isNext: action.part === "partOne" ? false : true,
                  canCreate,
                  ...list,
                  inputEntered: true
               };
            }
         } else {
            return {
               ...state,
               isNext: false,
               inputEntered: true
            };
         }
      case "CAPTCHA_VERIFY":
         return { ...state, verifyed: true, captchaPristine: false };
      case "SETUP_BOOK_TYPE":
         if (action.bookType === "you") {
            return {
               ...init,
               sondaug: { valid: true, errorText:""},
               relation: { value: "you", valid: true, refr: "you" }
            };
         } else if (action.bookType === "mom") {
            return {
               ...init,
               sondaug: initsondaug,
               gender: { value: "female", valid: true },
               relation: { value: "mom", valid: true, refr: "mom" }
            };
         } else {
            return {
               ...init,
               sondaug: initsondaug,
               gender: { value: "male", valid: true },
               relation: { value: "dad", valid: true, refr: "dad" }
            };
         }
      case "ENTER_INPUT":
         const { isValid, errorText } = selector.validate(
            action.text,
            action.field
         );
         let rel = null;
         if (action.field === "sondaug") {
            rel = {
               relation: {
                  value: action.text === "son"
                     ? state.relation.refr + "_s"
                     : state.relation.refr + "_d",
                  valid: true,
                  errorText:"",
                  refr: state.relation.refr
               }
            };
         }
         return {
            ...state,
            ...rel,
            [action.field]: {
               ...state[action.field],
               value: action.text,
               isPristine: false,
               isValid,
               errorText
            },
            inputEntered: true
         };
      case "CHECK_DATE":
         if (
            state.day.value === "День" ||
            state.year.value === "Год" ||
            state.month.value === "Месяц"
         ) {
            return state;
         } else {
            let calculatedAge = "";
            let dateExists = selector.isValidDate(
               state.year.value,
               data.months[state.month.value],
               state.day.value
            );
            if (dateExists) {
               calculatedAge = selector.getAge(
                  new Date(
                     state.year.value,
                     data.months[state.month.value],
                     state.day.value
                  )
               );
            } else {
               calculatedAge = "";
            }
            return { ...state, calculatedAge, dateExists, inputEntered: true };
         }
      case "CLEAR_GIFT_FORM":
         return init;
      default:
         return state;
   }
};
