export const input = action$ =>
    action$
        .ofType("ENTER_INPUT")
        .filter(action =>["day","year","month","name"].indexOf(action.field)>-1)
        .mapTo({type: "CHECK_DATE"})

export const changeForm = action$ =>
    action$
        .ofType("CHANGE_FORM")
        .filter(({bool, part})=>{
            return part === "partTwo"
        })
        .mapTo({type:"ME"})
