import url from "../../../entry/url"
const init = {
    url: url,
    osName: null,
    scroll:null
};

export default (state = init, action) => {
    switch (action.type) {
        case "OS_NAME":
            return { ...state, osName: action.name };
        case "SETUP_SCROLL":
            return {...state, scroll:action.scroll}
        default:
            return state;
    }
};
