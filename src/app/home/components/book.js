import React from "react";
import "./book.css";
import { utils, Paspartu } from "../../shared";
import {getFontSize} from '../../shared/utils'

export default({ bookName, name,bookType, page}) => {
    const result = utils.getBookName(bookName, name,bookType);
    const toRender = utils.getBookName(bookName, name,bookType);
    let fontSize = "1em";
    // fontSize=getFontSize(result);

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
                    // fontSize: fontSize, 
                    fontFamily: "BebasBold", width:'100%', height:'100%',
                    display:'flex', alignItems:'flex-end', justifyContent:'flex-end'
                }}
            >
                <Paspartu name={toRender} page={page}/>
            </div>
        </div>
    );
};


