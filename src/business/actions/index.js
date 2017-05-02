//form
export const enterInput=(text,field)=>{
    return ({type: 'ENTER_INPUT', text, field})
}

export const checkDate=()=>{
    return ({type:"CHECK_DATE"})
}

export const changeForm=(isNext)=>{
    return ({type:"CHANGE_FORM", isNext})
}

//modal
export const openModal=(page, book)=>{
    return ({type:"OPEN_MODAL",page, book})
}

export const modalChange=(params,page)=>{
    return ({type:"MODAL_CHANGE",params,page})
}

export const closeModal=()=>{
    return ({type:"CLOSE_MODAL"})
}

//api
export const createBook=(book)=>{
    return ({type:"CREATE_BOOK",book})
}
export const updatePage=(page,params)=>{
    return ({type:"UPDATE_PAGE",page,params})
}
export const genPages=(count, book_id)=>{
    return ({type:"GEN_PAGES", count, book_id})
}

