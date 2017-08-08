import React from 'react'
import './paspartu.css'
import {getBookName, getFontSize} from '../utils'

const Paspartu =({name, page})=> {
	let nameToRender = name.slice(0);
	let fontsize = getFontSize(name);
	
	return (
		<div
			styleName="r"
		>
			<div 
				styleName="part1" 
				style={{fontSize:fontsize}}
			>
				{nameToRender} 
			</div>
		</div>
	)
}
export default Paspartu;