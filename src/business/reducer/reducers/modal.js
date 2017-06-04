const init = {
  isOpen: false,
  page: null,
  book: null,
  params: null
};

export default (state = init, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        page: action.page,
        book: action.book,
        params: action.params ? action.params : { zoom: false }
      };
    case "CLOSE_MODAL":
      return { isOpen: false, page: null, book: null };
    default:
      return state;
  }
};
