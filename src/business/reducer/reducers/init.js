const init = {
    url: "http://localhost:4000",
    osName: null
};

export default (state = init, action) => {
    switch (action.type) {
        case "OS_NAME":
            return { ...state, osName: action.name };
        default:
            return state;
    }
};
