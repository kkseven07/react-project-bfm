import React from 'react'
import './video.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
class Video extends React.Component {
	state={style:'none', style1:'1'}
	render() {

	    return <div className="width-full flex flex-center" styleName="r">
			<div styleName="title">КАК ЭТО РАБОТАЕТ?</div>
	        	<div 
	        		styleName="youtube" 
	        		// onMouseEnter={()=>{this.setState({style:'block', style1:'130'}); console.log("on")}}
	        		// onMouseLeave={()=>{this.setState({style:'none', style1:'1'}); console.log("off")}} 
	        		style={{zIndex:this.state.style1}}
	        	>
	        		<iframe  style={{border:'none', width:'100%', height:'100%'}}src="https://www.youtube.com/embed/APe8-aG9hw8" allowFullScreen ></iframe>
	        		
	        	</div>
				<div styleName="darkness" style={{display:this.state.style}}></div>
	    </div>
	}
}
export default Video;