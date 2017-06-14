import React from "react";
import "./virtue.css";
import {checkLength } from "../../shared/utils.js";
const string = "qwe we ew as";
const fitText =(s)=> {
	let arr = s.split(" ");
	let max=0, index=0;
	for (let i=0;i<arr.length;i++) {
		if (arr[i].length>max) {
			max=arr[i].length
			index=i;
		}
	}

	let size= arr[index].length>6?checkLength(arr[index], 6, 1.5):'1.5em';

	return size;
}
export default props => (

//style={{ fontSize: props.page.data.text&&checkLength(props.page.data.text, 6, 1.5) }}
    <div className="full" styleName="r">
    	<div styleName="name">{props.book.name}</div>
    	<div styleName="default-text">
			<div styleName="text-piece" style={{left:'-21%'}}>у вас много</div>
			<div styleName="text-piece" style={{left:'-7%'}}>хороших качеств,</div>
			<div styleName="text-piece" style={{left:'10%'}}>но, прежде </div>
			<div styleName="text-piece" style={{left:'23%'}}>всего, вы:</div>
    	</div>
        <div className="absolute" styleName="text"
        	style={{fontSize:props.page.data.text&&fitText(props.page.data.text)}}
        	>
            {props.page.data.text?props.page.data.text.toUpperCase():"упорны".toUpperCase()}
        </div>
    </div>
);
