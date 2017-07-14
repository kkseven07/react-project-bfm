export default (state = {open:false,count:0, routeChanged:false}, action)=>{
    switch(action.type) {
    	
        case 'OPEN_MENU' :
            return {open:true,count:0}
        case 'CLOSE_MENU' :
            return {open:false, count:state.count+1}
        case '@@router/LOCATION_CHANGE' :
        	return {open:false, count:state.count+1, routeChanged:true }
        default :
            return state
    }

}