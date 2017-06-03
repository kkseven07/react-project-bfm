const init = {
  page:null,
  book:null
};

export default (state = init, action) => {
  switch (action.type) {
    case "PAGE_FOUND":
      return action.payload;
    default:
      return state;
  }
};
