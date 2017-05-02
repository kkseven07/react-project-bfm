export const isEmpty = (str)=>(str.length === 0 || !str.trim());
export const isValidStr=(str)=>!str.match(/[^а-яА-Яa-zA-Z]/gi);
export const tooLong=(str, limit) => (str.length>limit)

export const validate=(str,field) =>{
    let limit=20
    if(isEmpty(str)){
        if(field==="bookName"){
            return {
                isValid:true,
                errorText:""
            }
        }
        return {
            isValid:false,
            errorText:"Необходимо заполнить"
        }
    }else if(!isValidStr(str)){
        return {
            isValid:false,
            errorText:"Содержит неподдерживаемые знаки"
        }
    }else if(tooLong(str,limit)){
        return {
            isValid:false,
            errorText:`Длина текста превышает допустимую`,
        }
    }else{
        return {
            isValid:true,
            errorText:""
        }
    }
}

