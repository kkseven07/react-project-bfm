//initial

export const osName = name => {
    return { type: "OS_NAME", name };
};

export const setupScroll=(scroll)=>{
    return {type:"SETUP_SCROLL", scroll}
}

//form
export const enterInput = (text, field) => {
    return { type: "ENTER_INPUT", text, field };
};
export const setupBookType=(bookType)=>{
    return {type:"SETUP_BOOK_TYPE", bookType}
}
export const captchaVerify = () => {
    return { type: "CAPTCHA_VERIFY" };
};

export const checkDate = () => {
    return { type: "CHECK_DATE" };
};

export const changeForm = (isNext, part, gift, history) => {
    return { type: "CHANGE_FORM", isNext, part, gift, history };
};

export const orderInput = (text, field) => {
    return { type: "ORDER_INPUT", text, field };
};
export const emailInput = (text, field) => {
    return { type: "EMAIL_INPUT", text, field };
};
export const validateForm = (order) => {
    return { type: "VALIDATE_FORM", order:order };
};
export const voucherInput =(text, field)=> {
    return {type: "VOUCHER_INPUT", text, field};
}
export const validateVaucher = (vaucher) => {
    return { type: "VALIDATE_VOUCHER", vaucher:vaucher };
};
export const contactInput =(text, field)=> {
    return {type: "CONTACT_INPUT", text, field};
}
export const emailContactInput = (text, field) => {
    return { type: "EMAIL_CONTACT_INPUT", text, field };
};
export const validateContactForm = () => {
    return { type: "VALIDATE_CONTACTFORM" };
};


//modal
export const openModal = (page, book, params) => {
    return { type: "OPEN_MODAL", page, book, params };
};
export const openRouteModal = (name) => {
    return { type: "OPEN_ROUTEMODAL", name };
};
export const closeRouteModal = () => {
    return { type: "CLOSE_ROUTEMODAL" };
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

export const bookVersion = (name, value, book_id) => {
    return { type: "BOOK_VERSION", name, value, book_id };
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

export const bookLoaded = (bookId) =>{
    return {type:"BOOK_LOADED", bookId}
}

export const updatePage = (page, params) => {
    return { type: "UPDATE_PAGE", page, params };
};

export const bookFormat = (book) => {
    return {type: "BOOK_FORMAT", book}
}

export const createOrder = params => {
    return { type: "CREATE_ORDER", params };
};

export const genPages = (count, book_id) => {
    return { type: "GEN_PAGES", count, book_id };
};
export const getBook = (book_id, print) => {
    return { type: "GET_BOOK", book_id, print };
};
export const getBookPage = (book_id, page_type) => {
    return { type: "GET_BOOK_PAGE", book_id, page_type };
};
export const upload = (book_id, page, params, text) => {
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
    return { type: "DELETE_FROM_CACHE", id: id };
};

export const loadFromCache = book => {
    return { type: "LOAD_FROM_CACHE", book };
};

export const loadCache = () => {
    return { type: "LOAD_CACHE" };
};
// order
export const confirmOrder = (books, orderDetails) => {
    return { type: "CONFIRM_ORDER", books: books, orderDetails: orderDetails };
};

export const loadOrderCache = () => {
    return { type: "LOAD_ORDER_CACHE" };
};
export const checkOrderPage =()=> {
    return {type: "CHECK_ORDER_PAGE"};
}
//facebook 
export const getFacebookResponse =(response)=> {
    return {type: "GET_FACEBOOK_RESPONSE", response:response};
}