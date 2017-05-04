

import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../../../assets/icons/logo.png"
import "./header.css"

const links = ["КНИГИ", "О НАС", "КОНТАКТЫ"]
const active={color:"#5877ff",fontFamily:"RobotoMedium",textDecoration:"underline"}
const style={color:"black",textDecoration:"none"}
export default ({history}) => (
    <div className="flex fixed" styleName="r">
        <div className="flex flex-center"
            styleName="logo"
            onClick={()=>history.push("/")}
        >
            <img styleName="image"
            src={Logo}/>

        </div>

        <div className="flex flex-center" style={{fontFamily:"RobotoRegular",fontSize:23}} styleName="links">
            <NavLink
                to="/books"
                style={style}
                activeStyle={active}>
                КНИГИ
            </NavLink>

            <NavLink
                to="/about"
                style={style}

                activeStyle={active}
                >
                О НАС
            </NavLink>

            <NavLink
                to="/contacts"
                style={style}

                activeStyle={active}>
                КОНТАКТЫ
            </NavLink>

        </div>
    </div>)