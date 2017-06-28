import React from 'react'
import './paspartu.css'
import {getBookName, getFontSize} from '../utils'

const Paspartu =({name, page})=> {
	let nameToRender = name.slice(0);
	let fontsize = getFontSize(name);
	
	return (
		<div
			styleName="r"
			style={{color:page.data.text_color,
				boxShadow:`0 -1px 5px ${page.data.border_color}, 0 1px 5px ${page.data.border_color},
				1px 0 5px ${page.data.border_color}, -1px 0 5px ${page.data.border_color}`
			}}
		>
			<div 
				styleName="part1" 
				style={{border:`0.072em solid ${page.data.border_color}`, fontSize:fontsize}}
			>
				{nameToRender} 
			</div>
		</div>
	)
}
export default Paspartu;