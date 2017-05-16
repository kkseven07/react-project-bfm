const init = {
  page:null,
  book:null
};

export default (state = init, action) => {
  switch (action.type) {
    case "PAGE_FOUND":
      console.log("here we go", action.payload)
      return action.payload;
    default:
      return state;
  }
};
