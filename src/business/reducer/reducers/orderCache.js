const initialState= {
    order:null
}
export const normaliseOrders = orders => {
   let map = {};
   orders.forEach((order, i) => (map[order.orderId] = order));
   return map;
};
export default (state = initialState, action) => {

    switch (action.type) {
        case "LOAD_ORDER_CACHE_FULFILLED" :
            console.log("load")
            let orders = normaliseOrders(action.payload);
            return {
                ...orders
            }
            

        default:
            return state;
    }
};