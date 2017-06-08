import url from "../../../entry/url"
const init = {
    url: url,
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
