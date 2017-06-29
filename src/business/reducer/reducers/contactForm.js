import * as selector from "./selectorForm";
import every from "lodash/every";
import mapValues from "lodash/mapValues";
import find from "lodash/find";
const initialState = {
    name: { value: "", isPristine: true, isValid: true, errorText: "" },
    email: { value: "", isPristine: true, isValid: true, errorText: "" },
    text: { value: "", isValid: true, errorText: "" },
    canConfirm:false,
    status:false
};
const test = {
    name: { value: "John", isPristine: true, isValid: true, errorText: "" },
    email: { value: "john@mail.com", isPristine: true, isValid: true, errorText: "" },
    text: { value: "che u vas tak vse kruto???", isValid: true, errorText: "" },
    canConfirm:false,
    status:false
};
const types=["name", "email", "text"];
export default (state = test, action) => {
    switch (action.type) {
        case "EMAIL_CONTACT_INPUT":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.text,
                    isPristine: false,
                    isValid:true,
                    errorText:""
                }
            }
        case "CONTACT_INPUT":
            const { isValid, errorText } = selector.validate(
                action.text,
                action.field
            );
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.text,
                    isPristine: false,
                    isValid,
                    errorText
                }

            };
        case "VALIDATE_CONTACTFORM":
            let fields = types.map(i => {
               const { isValid, errorText } = selector.validate(
                  state[i].value,
                  i
               );
            return {
                  isPristine: false,
                  isValid,
                  errorText,
                  fieldType: i,
                  value: state[i].value
               };
            });
            if ( every(mapValues(fields, ({ isValid }) => isValid)) ) {
                return {...state, canConfirm:true};

            }
            else {
                let list = types.reduce(
                  (acc, v) => ({
                     ...acc,
                     [v]: find(fields, obj => obj.fieldType === v)
                  }),
                  {}
               );
                return {
                    state,
                    ...list,
                    canConfirm:false
                }

            }
            case "SEND_CONTACTFORM_FULFILLED" :
            return {
                ...state,
                status:true
            };



        default:
            return state;
    }
};