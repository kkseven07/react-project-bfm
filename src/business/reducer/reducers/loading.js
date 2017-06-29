export default (state = { loading: false, type: "" }, action) => {
  switch (action.type) {
    case "GEN_PAGES":
    case "CREATE_BOOK":
      return { loading: true, type: "createBook" };
    case "UPLOAD":
      return { loading: true, type: "upload" };
    case "UPDATE_ORDER":

      return {loading:true, type:"updateOrder"}
    case "GET_BOOK":
    // case "UPDATE_PAGE":
    //   return  {loading:true, type:"updatePage"}
    // case "LOAD_FROM_CACHE":
    //   return { loading: true, type: "getBook" };
    case "CONFIRM_ORDER":
      return {loading:true, type:"createOrder"}
    case "CHECK_VOUCHER":
      return {loading:true, type:"checkVoucher"}
    case "SEND_CONTACTFORM":
      return {loading:true, type:"sendContactForm"}
    case "FETCH_BOOK_FULFILLED_DELAY":
    case "GEN_PAGES_FULFILLED":
    // case "UPDATE_PAGE_FULFILLED":
    case "UPLOAD_FULFILLED_DELAY":
    case "UPDATE_PAGE_DONE":
    case "LOAD_FROM_CACHE_FULFILLED":
    case "UPDATE_ORDER_FULFILLED":
    case "LOCAL_UPDATE_ORDER":
    case "FETCH_CANCEL":
    case "CREATE_ORDER_FULFILLED":
    case "CHECK_VOUCHER_FULFILLED":
    case "CHECK_VOUCHER_FAILED":
    case "SEND_CONTACTFORM_FULFILLED":

      return { ...state, loading: false };
    case "AJAX_ERROR":
      return { ...state, loading: false };
    default:
      return state;
  }
};
