export const normalisePages = pages => {
  let mapPages = {};
  pages.forEach(page => (mapPages[page.id] = page));
  return mapPages;
};

export default (state = { currentBookId: null }, action) => {
  switch (action.type) {
    case "LOAD_FROM_CACHE":
      console.log("i m here loading from cache")
      return {...state,[action.book.id]:action.book,currentBookId: action.book.id}
    case "FETCH_BOOK_FULFILLED":
      let book = {
        ...action.payload.book,
        pages: normalisePages(action.payload.pages)
      };
      return {
        ...state,
        [action.payload.book.id]: book,
        currentBookId: book.id
      };

    case "UPLOAD_FULFILLED":
    case "UPDATE_PAGE_FULFILLED":
      let page = action.payload.page;
      return {
        ...state,
        [action.payload.book_id]: {
          ...state[action.payload.book_id],
          pages: {
            ...state[action.payload.book_id].pages,
            [action.payload.page.id]: page
          }
        }
      };

    case "GEN_PAGES_FULFILLED":
      book = {
        ...action.payload.book,
        pages: normalisePages(action.payload.pages)
      };
      return {
        ...state,
        [action.payload.book.id]: book,
        currentBookId: book.id
      };
    default:
      return state;
  }
};
