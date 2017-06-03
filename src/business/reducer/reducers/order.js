import every from "lodash/every";
import mapValues from "lodash/mapValues";
import find from "lodash/find";
const initialState = {
    name: { value: "", isPristine: true, isValid: true, errorText: "" },
    email: { value: "", isPristine: true, isValid: true, errorText: "" },
    phone: { value: "", isPristine: true, isValid: true, errorText: "" },
    address: { value: "День", isPristine: true, isValid: true, errorText: "" }
};
import * as selector from "./selectorForm";
export default (state = initialState, action) => {
    switch (action.type) {
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
                },
                inputEntered: true
            };
        default:
            return state;
    }
};
