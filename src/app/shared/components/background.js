

import React from 'react'
import "./background.css"
export default ({isFetching,zIndex,children}) => (
    <div>
        {
            isFetching&&<div style={{zIndex:zIndex}}
            className="flex full flex-center fixed" styleName="r">
            {children}
            </div>
        }

    </div>)