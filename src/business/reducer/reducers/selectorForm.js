export const isEmpty = (str)=>(str.length === 0 || !str.trim());
export const isValidStr=(str)=>!str.match(/[^а-яА-Яa-zA-Z ]/gi);
export const tooLong=(str, limit) => (str.length>limit)
const validateFields=["name","surname", "senderName"]
const defaultFields=["Пол", "Месяц","Возраст указанный в книге","Год","День", "Кем приходитесь?"]
const selectFields=["gender", "age","relation","month","day","year"]

export const validateSelect = (str)=>{
    if(defaultFields.indexOf(str)>-1){
        return {isValid:false, errorText:"Необходимо заполнить"}
    }
    return {isValid:true, errorText:""}

}
export const validateMicro=(str)=>{
    return {
                isValid:true,
                errorText:""
    }
}

export const validate=(str,field) =>{
    let limit=18
    if(selectFields.indexOf(field)>-1){

        return validateSelect(str)
    }
    if(field==="bookName"){
        if(tooLong(str,30)){
            return {
                isValid:false,
                errorText:`Длина текста превышает допустимую`,
            }
        }
        return validateMicro(str)
    }
    if(isEmpty(str)){

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


export const isValidDate=(y,m,d)=>{
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
      }
      return !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[m]
    }

export const getAge=(b)=>{
   return ""+~~((Date.now() - b) / (31557600000))
}

