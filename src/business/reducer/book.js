const normalisePages=(pages)=>{
  let mapPages={}
  pages.forEach(page=>(mapPages[page.id]=page))
  return mapPages
}

export default (state = {}, action) => {
  switch (action.type) {
  case 'FETCH_BOOK_FULFILLED':
    let book = {...action.payload.book, pages: normalisePages(action.payload.pages)}
    return { ...state, [action.payload.book.id]: book, currentBookId: book.id}

  case "UPDATE_PAGE_FULFILLED":
    let page=action.payload.page
    console.log("-0-0-0-0-0-0-0-0999",state[action.payload.book_id])
    return {...state,
      [action.payload.book_id]:{...state[action.payload.book_id],
       pages:{...state[action.payload.book_id].pages,[action.payload.page.id]:page}}}

  case 'GEN_PAGES_FULFILLED':
    book={...action.payload.book, pages: normalisePages(action.payload.pages)}
    return {...state, [action.payload.book.id]: book, currentBookId: book.id}
  default:
    return state
  }
}
