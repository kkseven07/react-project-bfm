

import React from 'react'
import "./background.css"
// import {TransitionMotion, spring} from 'react-motion'

export default ({isFetching,zIndex,children}) => (
    <div>


        {
            (isFetching&&isFetching)&&<div style={{zIndex:zIndex}}
            className="flex flex-center fixed" styleName="r">
            {children}
            </div>
        }

    </div>)


// class Background extends React.Component{

//     state={items:[{key:"form1",style:{opacity:spring(1,{stiffness: 100, damping: 5}),
//         zIndex:spring(this.props.zIndex)}}]}
//     willEnter(){
//       return {opacity : 1}
//     }
//     willLeave(){
//         return {
//         opacity: spring(0.6,{stiffness: 50, damping: 2}),zIndex:this.props.zIndex}
//     }


//     render(){
//         const {isFetching, zIndex,children}=this.props

//          return <TransitionMotion
//             styles={this.state.items}
//             willLeave={this.willLeave}
//             >
//             {(items) => <div >{items.map(style=>{
//                   return <div key={style.key}>
//                     {
//                         (isFetching&&isFetching)&&<div
//                         className="flex flex-center fixed" styleName="r" style={style.style}>
//                         {children}
//                         </div>
//                     }

//                   </div>
//               })}</div>
//             }
//         </TransitionMotion>
//     }

// }

// export default Background