import invert from 'lodash/invert'
export const areEqualShallow = (a, b) =>{
    for(var key in a) {
        if(a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

export const test=()=> console.log("Ilyas is awesome")

export const fieldStyle=(isPristine,isValid)=>{
    if(isPristine){
        return "enter"
    }else if(!isValid){
        return "enter error"
    }else{
        return "enter valid"
    }
}

export const getDate=(raw,monthMap)=>{
    const date = new Date(raw)
    const day = date.getUTCDate()
    const month = (invert(monthMap))[date.getUTCMonth()]
    const year = date.getUTCFullYear()
    return {day,month,year}
}

export const cellTime = (month, year)=>
    (month>9?{month:month-9, year}:{month:month+3,year:year-1})

export const textColor=(bacgroundColor,colors)=>
    (colors.filter(cmap=>cmap.background===bacgroundColor)[0].text)

export const getBookName = (bookName, name) =>{
    if(name===""){
        return "КНИГА\nО\nТЕБЕ"
    }
    if(bookName===""){
        return name.toUpperCase()
    }
    let str=bookName.toUpperCase()
    let ls=str.trim().split(/\s+/)
    let length=str.length
    return ls.map((word,i)=> {
        if(i===length-1){
           return word
        }else{
            return word+"\n"
        }
    })
}