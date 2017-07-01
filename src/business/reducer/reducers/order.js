const initialState= {
    orderDetails: null,
    books:null,
    orderId:null
}
export const normaliseOrders = orders => {
   let map = {};
   orders.forEach((order, i) => (map[order.orderId] = order));
   return map;
};
export const normaliseBooks = books => {
   let map = {};
   books.forEach((book, i) => (map[k] = book));
   return map;
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "CONFIRM_ORDER":
                return {
                    books:action.books,
                    orderDetails:action.orderDetails
                };
        case "CREATE_ORDER_FULFILLED" :
            return {
                ...state,
                orderId:action.orderId
            };

        case "LOAD_ORDER_CACHE_FULFILLED" :
            let orders = normaliseOrders(action.payload);
            return {
                // ...state,
                ...orders
            }
        case "DELETE_BOOKS_FROM_CACHE":
          return {
            deleted:true
          }
            

        default:
            return state;
    }
};