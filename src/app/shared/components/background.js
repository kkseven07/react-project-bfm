

import React from 'react'
import "./background.css"
export default ({isFetching,zIndex,children}) => (
    <div>
        {
            (isFetching&&isFetching)&&<div style={{zIndex:zIndex}}
            className="flex flex-center fixed" styleName="r">
            {children}
            </div>
        }

    </div>)