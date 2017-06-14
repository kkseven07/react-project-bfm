export const normalisePages = pages => {
   let mapPages = {};
   pages.forEach(page => (mapPages[page.id] = page));
   return mapPages;
};
export const normaliseBooks = books => {
   let map = {};
   books.forEach(book => (map[book.id] = book));
   return map;
};
import reverse from "lodash/reverse";
import omit from "lodash/omit";
export default (state = { currentBookId: null }, action) => {
   switch (action.type) {
      case "DELETE_FROM_CACHE_FULFILLED":
         // const {[action.payload]:book_to_remove,...rest}=state
         let new_state = omit(state, action.payload);
         return { ...new_state, currentBookId: null };
      case "LOAD_FROM_CACHE":
         return {
            ...state,
            [action.book.id]: action.book,
            currentBookId: action.book.id
         };
      case "LOAD_CACHE_FULFILLED":
         let books = normaliseBooks(action.payload);
         let currentBookId = state.currentBookId || action.payload[0].id;
         return {
            ...state,
            currentBookId,
            ...books
         };
      case "BOOK_VERSION":
         let book = state[action.book_id];
         switch (action.name) {
            case "format":
               return {
                  ...state,
                  [action.book_id]: {
                     ...book,
                     format: action.value === "digital"
                        ? action.value
                        : action.value + "19"
                  }
               };
            case "size":
               return {
                  ...state,
                  [action.book_id]: {
                     ...book,
                     format: book.format.replace("19", "").replace("23", "") +
                        action.value
                  }
               };
            case "wrap":
               return {
                  ...state,
                  [action.book_id]: {
                     ...book,
                     gift_wrap: !book.gift_wrap
                  }
               };
         }
      case "FETCH_BOOK_FULFILLED":
         book = {
            ...action.payload.book,
            order: action.payload.order,
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
      case "UPDATE_ORDER_FULFILLED":
         let order = action.payload.order;
         return {
            ...state,
            [action.payload.book_id]: {
               ...state[action.payload.book_id],
               order
            }
         };

      case "GEN_PAGES_FULFILLED":
         book = {
            ...action.payload.book,
            pages: normalisePages(action.payload.pages),
            order: action.payload.order
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
