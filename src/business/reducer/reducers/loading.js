export default (state = { loading: false, type: "" }, action) => {
  switch (action.type) {
    case "GEN_PAGES":
    case "CREATE_BOOK":
      return { loading: true, type: "createBook" };
    case "GET_BOOK":
      return { loading: true, type: "getBook" };
    case "FETCH_BOOK_FULFILLED_DELAY":
    case "GEN_PAGES_FULFILLED":
    case "FETCH_CANCEL":
      return { ...state, loading: false };
    case "AJAX_ERROR":
      return { ...state, loading: false };
    default:
      return state;
  }
};
