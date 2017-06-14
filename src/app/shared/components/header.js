import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/icons/logo.png";
import "./header.css";
import url from "../../../entry/url"
import values from 'lodash/values'
import { push as Menu } from "react-burger-menu";
import * as actions from "../../../business/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const links = ["КНИГИ", "О НАС", "КОНТАКТЫ"];
const active = {
    color: "#5877ff",
    fontFamily: "RobotoMedium",
    textDecoration: "underline"
};
const style = { color: "black", textDecoration: "none" };
const styles = {
    bmBurgerButton: {
        display: "none"
    },
    bmBurgerBars: {
        background: "#373a47"
    },
    bmCrossButton: {
        height: "24px",
        width: "24px"
    },
    bmCross: {
        background: "#bdc3c7"
    },
    bmMenu: {
        background: "rgb(60, 85, 105)",
        padding: "30% 5% 0 0",
        fontSize: "1.15em"
    },
    bmMenuWrap: {
        zIndex: 102,
        width: "90%"
    },
    bmMorphShape: {
        fill: "#373a47"
    },
    bmItemList: {
        color: "#fff",
        padding: "0.8em 0.8em 0.8em 0",
        height: "initial"
    },
    bmOverlay: {
        background: "transparent",
        zIndex: 16
    },
    bmCrossButton: {
        display: "none"
    }
};

// const isMenuOpen = function(state) {
//   if (state.isOpen==false && props.menu)

// };
const header = ({ history, ...props }) => {
    const { currentBookId, ...books } = props.book;
    const count = values(books).length;
    return (
        <div styleName="header">
            {props.menu &&
                <div
                    onClick={props.actions.closeMenu}
                    style={{
                        position: "fixed",
                        zIndex: "100",
                        height: "100%",
                        width: "50%"
                    }}
                />}
            <Menu
                isOpen={props.menu}
                width={"90%"}
                styles={styles}
                right
                pageWrapId={"wrap"}
                outerContainerId={"outer-container"}
            >
                <div
                    styleName="menu-item"
                    onClick={() => {
                        history.push("/books");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">КНИГИ </span>
                    <i
                        styleName="icon"
                        className="fa fa-book"
                        aria-hidden="true"
                    />
                </div>
                <div
                    styleName="menu-item"
                    onClick={() => {
                        history.push("/about");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">О НАС </span>
                    <i
                        styleName="icon"
                        className="fa fa-users"
                        aria-hidden="true"
                    />
                </div>
                <div
                    styleName="menu-item"
                    onClick={() => {
                        history.push("/contacts");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">КОНТАКТЫ </span>
                    <i
                        styleName="icon"
                        className="fa fa-envelope-open"
                        aria-hidden="true"
                    />
                </div>
                <div
                    styleName="close-btn"
                    onClick={() => {
                        //("clickd");
                        props.actions.closeMenu();
                    }}
                >
                    <i className="fa fa-times" />
                </div>
            </Menu>

            <div className="flex fixed" styleName="r">

                <div styleName="open-btn" onClick={props.actions.openMenu}>
                    <i className="fa fa-bars" aria-hidden="true" />
                </div>

                <div
                    className="flex flex-center"
                    styleName="logo"
                    onClick={() => history.push("/")}
                >
                    <img styleName="image" src={`${url}/images/cdn/logo.jpg`} />

                </div>

                <div
                    className="flex flex-center"
                    style={{ fontFamily: "RobotoRegular", fontSize: 23 }}
                    styleName="links"
                >
                    <NavLink to="/books" style={style} activeStyle={active}>
                        КНИГИ
                    </NavLink>

                    <NavLink to="/about" style={style} activeStyle={active}>
                        О НАС
                    </NavLink>

                    <NavLink to="/contacts" style={style} activeStyle={active}>
                        КОНТАКТЫ
                    </NavLink>

                </div>

                {count>0&&<div onClick={()=>{
                    history.push("/cart")
                }} styleName="cart" style={{marginLeft:"20%"}}>
                    Корзина ({count})
                </div>}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    menu: state.menu.open,
    book: state.book,
    count: state.menu.count
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(header);
