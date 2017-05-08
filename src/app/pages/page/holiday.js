import React from 'react'
import './holiday.css'

export default ({page,book}) =>(
    <div className="full flex flex-center" styleName="r">
    	<div className="absolute" styleName="date">
			<div styleName="day">27</div>
			<div styleName="month">АПРЕЛЯ</div>
    	</div>
    	<div className="flex absolute" styleName="holiday">ДЕНЬ ЗЕМЛИ</div>
    </div>
);
	