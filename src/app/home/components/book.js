import React from "react";
import "./book.css";
import { utils, Paspartu } from "../../shared";

const getFontSize = str => {
    let maxWord="";
    let countWord =0;
    if (str instanceof Array) {
        maxWord = str.sort((word1, word2)=>word1.length<word2.length)[0].trim();
        countWord=str.length;
    } else {
        maxWord = str.split('\n').sort((word1, word2)=>word1.length<word2.length)[0].trim();
        countWord=str.split('\n').length;
    }
    let fontSize='';
    // console.log("length", maxWord.length, maxWord)
    if (maxWord.length >= 9 && maxWord.length < 13) {
        fontSize =  "0.52em";
    } else if (maxWord.length >= 13 && maxWord.length < 14) {
        fontSize =  "0.5em";
    }else if (maxWord.length >= 7 && maxWord.length < 9) {
        fontSize =  "0.78em";
    } else if (maxWord.length >= 14 && maxWord.length < 16) {
        fontSize =  "0.44em";
    } else if (maxWord.length >= 16) {
        fontSize =  "0.4em";
    }  else {
        fontSize =  "0.9em";
    }

    if (countWord>3 && countWord<4) {
        fontSize =  "0.7em";
    } else if (countWord>=4) {
        fontSize =  "0.55em";
    }
    return fontSize;
};
export default({ bookName, name,bookType, page}) => {
    const result = utils.getBookName(bookName, name,bookType);
    const toRender = utils.getBookName(bookName, name,bookType);
    let fontSize = "1em";
    fontSize=getFontSize(result);

    // if (result instanceof Array) {
    //     result.sort((a, b) => b.length - a.length);
    //     fontSize = getFontSize(result[0]);
    // } else {
    //     fontSize = getFontSize(result);
    // }
    return (
        <div styleName="r" className="flex app-blue" >
            <div styleName="korewok"></div>
            <div
                style={{
                    fontSize: fontSize, fontFamily: "BebasBold", width:'100%', height:'100%',
                    display:'flex', alignItems:'flex-end', justifyContent:'flex-end'
                }}
            >
                <Paspartu name={toRender} page={page}/>
            </div>
        </div>
    );
};


