import * as selector from "./selectorForm";
import every from "lodash/every";
import mapValues from "lodash/mapValues";
import find from "lodash/find";
const initialState = {
    voucherField: { value: "", isPristine: true, isValid: true, errorText: "" },
    voucherStatus: {isValid:"", type:"", number:"", discount:"", count:"" },
    shouldVoucherSend:false,
};

const types=["voucherField"];
export default (state = initialState, action) => {
    switch (action.type) {
        case "VOUCHER_INPUT":
            const { isValid, errorText } = selector.validate(
                action.text,
                action.field
            );
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.text.toUpperCase(),
                    isPristine: false,
                    isValid,
                    errorText
                }

            };
        case "VALIDATE_VOUCHER":
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
                return {voucherField:state.voucherField, shouldVoucherSend:true, voucherStatus:state.voucherStatus};

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
                    shouldVoucherSend: state.shouldVoucherSend,
                    voucherStatus:state.voucherStatus,
                    ...list,
                }

            }
            case "CHECK_VOUCHER_FULFILLED" :
            console.log("fulfilled", action.voucherStatus);
            const {valid, type, number, discount, count} = action.voucherStatus;
            return {
                ...state,
                voucherStatus:{
                  isValid: valid,
                  type:type,
                  number:number,
                  discount:discount,
                  count:count
                }

            };



        default:
            return state;
    }
};