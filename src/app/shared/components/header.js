

import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../../../assets/icons/logo.png"
import "./header.css"

const links = ["КНИГИ", "О НАС", "КОНТАКТЫ"]
const active={fontWeight:"bold", color:"red"}
export default ({history}) => (
    <div className="flex fixed" styleName="r">
        <div className="flex flex-center"
            styleName="logo"
            onClick={()=>history.push("/")}
        >
            <img styleName="image"
            src={Logo}/>

        </div>

        <div className="flex flex-center" styleName="links">
            <NavLink
                to="/books"
                activeStyle={active}>
                КНИГИ
            </NavLink>

            <NavLink
                to="/about"
                activeStyle={active}
                >
                О НАС
            </NavLink>

            <NavLink
                to="/contacts"
                activeStyle={active}>
                КОНТАКТЫ
            </NavLink>

        </div>
    </div>)