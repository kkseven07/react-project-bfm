export default (state={response:null} , action)=>{
    switch(action.type) {
        case 'GET_FACEBOOK_RESPONSE' :
            
            return {response:action.response}
        
        default :
            return state
    }

}