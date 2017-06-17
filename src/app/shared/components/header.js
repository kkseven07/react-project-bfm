import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/icons/logo.png";
import "./header.css";
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
        padding: "50% 0 0 0",
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
        height: "initial",
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

            {props.menu && // MOBILE MENU
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
                        history.push("/cart");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">КОРЗИНА </span>

                </div>
                <div
                    styleName="menu-item"
                    onClick={() => {
                        history.push("/about");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">О НАС </span>

                </div>
                <div
                    styleName="menu-item"
                    onClick={() => {
                        history.push("/contacts");
                        props.actions.closeMenu();
                    }}
                >
                    <span styleName="link">КОНТАКТЫ </span>

                </div>
                <div
                    styleName="close-btn"
                    onClick={() => {
                        console.log("clickd");
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
                    <img styleName="image" src={Logo} />

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

                {count>0&&<div
                    onClick={()=>{
                    history.push("/cart")
                }} styleName="cart" style={{marginLeft:"20%", position:'relative'}}>
                    <i style={{transform:'scale(1.5)'}} className="fa fa-shopping-cart"></i>
                    <div
                        style={{
                            position:'absolute',
                            top:'-70%',
                            left:'130%',
                            width:'1.3em',
                            height:'1.3em',
                            lineHeight:'1.4em',
                            borderRadius:'50%',
                            background:'rgb(253, 204, 89)',
                            textAlign:'center',
                            fontSize:'0.9em'
                        }}
                    >{count}</div>
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