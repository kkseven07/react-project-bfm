//initial

export const osName = name => {
    return { type: "OS_NAME", name };
};

//form
export const enterInput = (text, field) => {
    return { type: "ENTER_INPUT", text, field };
};

export const checkDate = () => {
    return { type: "CHECK_DATE" };
};

export const changeForm = (isNext, part) => {
    return { type: "CHANGE_FORM", isNext, part };
};

export const orderInput=(text,field) =>{
    return {type:"ORDER_INPUT", text, field}
}

//modal
export const openModal = (page, book, params) => {
    return { type: "OPEN_MODAL", page, book, params };
};

export const builderImage = (params, page) => {
    return { type: "BUILDER_IMAGE", params, page };
};

export const builderInput = (text, fieldType, which) => {
    return { type: "BUILDER_INPUT", text, fieldType, which };
};

export const rotateQualityTable = leftRotate => {
    return { type: "ROTATE_QUALITY_TABLE", leftRotate };
};

export const bookVersion = (version,whichVersion) => {
    return { type: "BOOK_VERSION", version, whichVersion };
};

export const cleanBuilder = () => {
    return { type: "CLEAN_BUILDER" };
};

export const closeModal = () => {
    return { type: "CLOSE_MODAL" };
};

//api
export const createBook = (book, history) => {
    // history.push("/books/1")
    return { type: "CREATE_BOOK", book, history };
};

export const updatePage = (page, params) => {
    return { type: "UPDATE_PAGE", page, params };
};
export const genPages = (count, book_id) => {
    return { type: "GEN_PAGES", count, book_id };
};
export const getBook = book_id => {
    return { type: "GET_BOOK", book_id };
};
export const getBookPage = (book_id, page_type) => {
    return { type: "GET_BOOK_PAGE", book_id, page_type };
};
export const upload = (book_id, page, params) => {
    return { type: "UPLOAD", book_id, page, params };
};

export const updateOrder = (order_id, params) => {
    return { type: "UPDATE_ORDER", order_id, params };
};

//menu
export const openMenu = params => {
    return { type: "OPEN_MENU", params };
};
export const closeMenu = () => {
    return { type: "CLOSE_MENU" };
};

//cache

export const deleteFromCache = id => {
    return { type: "DELETE_FROM_CACHE", id:id };
};

export const loadFromCache = book => {
    return { type: "LOAD_FROM_CACHE", book };
};

export const loadCache = () => {
    return { type: "LOAD_CACHE" };
};




