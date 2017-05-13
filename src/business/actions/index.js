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

//modal
export const openModal = (page, book) => {
    return { type: "OPEN_MODAL", page, book };
};

export const builderImage = (params, page) => {
    return { type: "BUILDER_IMAGE", params, page };
};

export const builderInput = (text, fieldType, which) => {
    return { type: "BUILDER_INPUT", text, fieldType, which };
};

export const cleanBuilder = () => {
    return {type:"CLEAN_BUILDER"};
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
