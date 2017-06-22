import * as selector from "./selectorForm";
import every from "lodash/every";
import mapValues from "lodash/mapValues";
import find from "lodash/find";
const initialState = {
    name: { value: "", isPristine: true, isValid: true, errorText: "" },
    email: { value: "", isPristine: true, isValid: true, errorText: "" },
    phone: { value: "", isPristine: true, isValid: true, errorText: "" },
    address: { value: "", isPristine: true, isValid: true, errorText: "" },
    promo: { value: "", isPristine: true, isValid: true, errorText: "" },
    canConfirm:false
};
const test = {
    name: { value: "John", isPristine: true, isValid: true, errorText: "" },
    email: { value: "john@mail.com", isPristine: true, isValid: true, errorText: "" },
    phone: { value: "+77072301555", isPristine: true, isValid: true, errorText: "" },
    address: { value: "Manas 34/a", isPristine: true, isValid: true, errorText: "" },
    promo: { value: "", isPristine: true, isValid: true, errorText: "" },
    canConfirm:false
};
const types=["name", "email", "phone", "address"];
export default (state = test, action) => {
    switch (action.type) {
        case "EMAIL_INPUT":
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
        case "ORDER_INPUT":
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
        case "VALIDATE_FORM":
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
                return {...state, canConfirm:true, order:action.order};

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



        default:
            return state;
    }
};