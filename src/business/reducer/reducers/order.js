const initialState= {
    orderDetails: null,
    books:null,
    orderId:null
}
export const normaliseOrders = orders => {
   let map = {};
   let k=0;
   orders.forEach((order, i) => (map[k] = order));
   return map;
};
export const normaliseBooks = books => {
   let map = {};
   let k=0;
   books.forEach((book, i) => (map[k] = book));
   return map;
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "CONFIRM_ORDER":
        let id =0;
        console.log("CONFIRMED")
                return {
                    orderId: id,
                    books:action.books,
                    orderDetails:action.orderDetails
                };
        id++;
        case "CONFIRM_ORDER_FULFILLED" :
        console.log("CONFIRMED FULFILLED")
            return {
                ...state
            };
        case "LOAD_ORDER_CACHE_FULFILLED" :
            console.log("action.payload", action.payload)
            let orders = normaliseOrders(action.payload);
            return {
                // ...state,
                ...orders
            }
        default:
            return state;
    }
};