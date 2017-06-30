const init = {
  isOpen: false,
  name:null
};

export default (state = init, action) => {
  switch (action.type) {
    case "OPEN_ROUTEMODAL":
      return { isOpen: true, name:action.name};
    case "CLOSE_ROUTEMODAL":
      return { isOpen: false};
    default:
      return state;
  }
};
