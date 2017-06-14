export default (state = { loading: false, type: "" }, action) => {
  switch (action.type) {
    case "GEN_PAGES":
    case "CREATE_BOOK":
      return { loading: true, type: "createBook" };
    case "UPDATE_ORDER":
      return {loading:true, type:"updateOrder"}
    case "GET_BOOK":
    case "UPDATE_PAGE":
      return  {loading:true, type:"updatePage"}
    case "LOAD_FROM_CACHE":
      return { loading: true, type: "getBook" };
    case "FETCH_BOOK_FULFILLED_DELAY":
    case "GEN_PAGES_FULFILLED":
    case "UPDATE_PAGE_FULFILLED":
    case "LOAD_FROM_CACHE_FULFILLED":
    case "UPDATE_ORDER_FULFILLED":
    case "LOCAL_UPDATE_ORDER":
    case "FETCH_CANCEL":
      return { ...state, loading: false };
    case "AJAX_ERROR":
      return { ...state, loading: false };
    default:
      return state;
  }
};
