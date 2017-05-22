export default (state = {open:false,count:0}, action)=>{
    switch(action.type) {
        case 'OPEN_MENU' :
            return {open:true,count:0}
        case 'CLOSE_MENU' :
            console.log("here i m closing the menu")
            console.log(state.count)
            return {open:false, count:state.count+1}
        default :
            return state
    }

}