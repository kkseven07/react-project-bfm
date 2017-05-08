
export default (state = null, action) => {
  switch (action.type) {
  case 'FETCH_BOOK_FULFILLED':
    return  action.payload.book.id
  case 'GEN_PAGES_FULFILLED':
    return  action.payload.book.id
  default:
    return state
  }
}
