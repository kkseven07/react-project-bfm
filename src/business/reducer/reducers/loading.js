
export default (state = false, action) => {
  switch (action.type) {
  case 'GEN_PAGES':
  case 'CREATE_BOOK':
    console.log("here we go")
    return true
  case 'FETCH_BOOK_FULFILLED_DELAY':
  case 'GEN_PAGES_FULFILLED':
  case 'FETCH_CANCEL':
    return false
  case 'AJAX_ERROR':
    return false
  default:
    return state
  }
}
