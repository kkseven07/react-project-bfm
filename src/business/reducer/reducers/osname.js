

export default (state = "", action) => {
  switch (action.type) {
    case "OS_NAME":
      return action.name;
    default:
      return state;
  }
};
