

export default (state = {}, action) => {
  switch (action.type) {
    case "OS_NAME":
      return {...state, osName:action.name};
    default:
      return state;
  }
};
