import React from 'react'
import './animal.css'

export default ({page,book}) =>(
    <div className="full flex flex-center" styleName="r">
        <div className="flex flex-center" styleName="first">
            <div styleName="big">{page.data.year}  </div>
            <div styleName="">{page.data.animal.name}</div>
        </div>
        <div className="flex flex-center" styleName="second">
            <div styleName="small">
                {page.data.animal.description}
            </div>
        </div>

    </div>
);