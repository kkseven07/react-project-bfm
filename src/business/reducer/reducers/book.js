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
   console.log("DADA", action.type)
   switch (action.type) {
      case "DELETE_BOOKS_FROM_CACHE_FULFILLED":
          return {}
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

      case "UPDATE_PAGE":
         let page_to_update = action.page;
         let params = action.params;
         let selectedImage = params.selectedImage;
         let text = params.text || page_to_update.data.text;

         if (action.page.type === "qualityTable") {
            page_to_update = state[action.page.gift_id].pages[action.page.id+1]
            let arr=page_to_update.primary_image.image.url.split("_")
            arr[1]=text
            selectedImage=arr.join("_")
         }
         let text1 = params.text1 || page_to_update.data.text1;
         let text2 = params.text2 || page_to_update.data.text2;
         let background = params.background || page_to_update.data.background;
         let text_color = params.text_color || page_to_update.data.text_color;
         let border_color = params.border_color || page_to_update.data.border_color;
         let page_to_return = {
            ...page_to_update,
            primary_image: {
               ...page_to_update.primary_image,
               image: {
                  url: selectedImage
                     ? selectedImage.replace("smx25", "bbx24s")
                     : page_to_update.primary_image.image.url
               }
            },
            data: {
               ...page_to_update.data,
               text,
               text1,
               text2,
               background,
               text_color,
               border_color
            }
         };
         return {
            ...state,
            [page_to_return.gift_id]: {
               ...state[page_to_return.gift_id],
               pages: {
                  ...state[page_to_return.gift_id].pages,
                  [page_to_return.id]: page_to_return
               }
            }
         };

      case "UPLOAD_FULFILLED":
         // case "UPDATE_PAGE_FULFILLED":
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
