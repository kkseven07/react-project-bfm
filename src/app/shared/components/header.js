import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
// import Logo from "../../../../assets/icons/logo.png";
import url from "../../../entry/url";

import "./header.css";
import values from "lodash/values";
import { push as Menu } from "react-burger-menu";
import * as actions from "../../../business/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FacebookProvider, { Login } from 'react-facebook';
import FacebookLogin from 'react-facebook-login'
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
        background: "rgb(71, 156, 224)",
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
//   if (state.isOpen==false && this.props.menu)

// };

class Header extends React.Component {
    state = { isOpen: false };
    componentWillReceiveProps(props) {
        props.routeChanged&&this.setState({isOpen:false})
    }
    render() {
        {console.log("state", this.props.fbProfile)}
        const { currentBookId, ...books } = this.props.book;
        const { history } = this.props;
        const { ...orders } = this.props.order;
        const count = values(books).length;
        const orderCount = values(orders).length;
        const location = history.location.pathname;
        let dropStyle = this.state.isOpen ? "flex" : "none";
        return (
            <div styleName="header">
                {this.props.menu && // <-></->--------------------------MOBILE MENU--------------------------------
                    <div
                        onClick={this.props.actions.closeMenu}
                        style={{
                            position: "fixed",
                            zIndex: "100",
                            height: "100%",
                            width: "50%"
                        }}
                    />}
                <Menu
                    isOpen={this.props.menu}
                    width={"90%"}
                    styles={styles}
                    right
                    pageWrapId={"wrap"}
                    outerContainerId={"outer-container"}
                >
                    <div
                        style={{position:'absolute', top:'2%', left:'6%', textAlign:'center'}}
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/");
                            this.props.actions.closeMenu();
                        }}
                    >
                        <img styleName="image" src={`${url}/images/logo.png`} alt="" />

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/"); 
                            this.props.actions.closeMenu();
                            this.props.actions.setupBookType("you");
                            setTimeout(()=>this.props.scroll(),100);
                        }}
                    >
                        <span styleName="link">КНИГА О ТЕБЕ </span>

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/"); 
                            this.props.actions.closeMenu();
                            this.props.actions.setupBookType("mom");
                            setTimeout(()=>this.props.scroll(),100);
                        }}
                    >
                        <span styleName="link">КНИГА О МАМЕ</span>

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/"); 
                            this.props.actions.closeMenu();
                            this.props.actions.setupBookType("dad");
                            setTimeout(()=>this.props.scroll(),100);
                        }}
                    >
                        <span styleName="link">КНИГА О ПАПЕ </span>

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/cart");
                            this.props.actions.closeMenu();

                        }}
                    >
                        <span styleName="link">КОРЗИНА </span>

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/about");
                            this.props.actions.closeMenu();
                        }}
                    >
                        <span styleName="link">О ПРОДУКТЕ </span>

                    </div>
                    <div
                        styleName="menu-item"
                        onClick={() => {
                            history.push("/contacts");
                            this.props.actions.closeMenu();
                        }}
                    >
                        <span styleName="link">КОНТАКТЫ </span>

                    </div>
                    <div
                        styleName="close-btn"
                        onClick={() => {
                            this.props.actions.closeMenu();
                        }}
                    >
                        <i className="fa fa-times" />
                    </div>
                </Menu>

                <div className="flex fixed" styleName="r">

                    <div
                        styleName="open-btn"
                        onClick={this.props.actions.openMenu}
                    >
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>

                    <div
                        className="flex flex-center"
                        styleName="logo"
                        onClick={() => history.push("/")}
                    >
                        <img styleName="image" src={`${url}/images/logo.png`} />

                    </div>

                    <div // ---------------------DESKTOP MENU---------------------------
                        className="flex flex-center"
                        style={{ fontFamily: "RobotoMedium", fontSize: 23 }}
                        styleName="links"
                    >
                        <div
                            styleName="books d-item"
                            style={{
                                color: this.props.location.pathname ===
                                    "/books" && "#2d6cf9"
                            }}
                            //onClick={()=>{
                            //       history.push("/books");
                            //   }}; onClick={this.dropdownClickHandler}

                            onClick={() => {
                                this.state.isOpen
                                    ? this.setState({ isOpen: false })
                                    : this.setState({ isOpen: true });
                                // history.push("/");
                            }}
                        >
                            <span>КНИГИ</span>
                            <i
                                className="fa fa-sort-desc"
                                style={{
                                    bottom: "5%",
                                    position: "absolute",
                                    marginLeft: "0.2em",
                                    lineHeight: this.state.isOpen
                                        ? "100px"
                                        : "120px",
                                    transform: this.state.isOpen &&
                                        "rotate(180deg)"
                                }}
                            />

                        </div> 
                        <div
                            onClick={e => e.stopPropagation()}
                            styleName="dropdown"
                            style={{ display: `${dropStyle}` }}
                        >
                            <div styleName="dropdown-list">
                                <div
                                    styleName="list-item"
                                    onClick={() => {
                                        history.push("/"); 
                                        this.setState({ isOpen: false });
                                        this.props.actions.setupBookType("you");
                                        setTimeout(()=>this.props.scroll(),100);



                                    }}
                                >
                                    КНИГА О ТЕБЕ
                                </div>
                                <div
                                    styleName="list-item"
                                    onClick={() => {
                                        history.push("/");  
                                        this.setState({ isOpen: false });
                                        this.props.actions.setupBookType("mom");
                                        setTimeout(()=>this.props.scroll(),100);


                                    }}
                                >
                                    КНИГА О МАМЕ
                                </div>
                                <div
                                    styleName="list-item"
                                    onClick={() => {
                                        history.push("/");  
                                        this.setState({ isOpen: false });
                                        this.props.actions.setupBookType("dad");
                                        setTimeout(()=>this.props.scroll(),100);


                                    }}
                                >
                                    КНИГА О ПАПЕ
                                </div>
                            </div>
                            <div
                                style={{ textAlign: "center", display: "none" }}
                            >
                                <i className="fa fa-sort-asc" />
                            </div>
                        </div>
                        <div
                            styleName="d-item"
                            style={{
                                color: this.props.location.pathname ===
                                    "/about" && "#2d6cf9"
                            }}
                            onClick={() => history.push("/about")}
                        >
                            О ПРОДУКТЕ
                        </div>
                        <div
                            styleName="d-item"
                            style={{
                                color: this.props.location.pathname ===
                                    "/contacts" && "#2d6cf9"
                            }}
                            onClick={() => history.push("/contacts")}
                        >
                            КОНТАКТЫ
                        </div>

                    </div>

                    {(count > 0 || orderCount > 0) &&
                        <div
                            onClick={() => {
                                history.push("/cart");
                            }}
                            styleName="cart"
                            style={{ marginLeft: "20%", position: "relative", fontFamily:'RobotoRegular' }}
                        >
                            <i
                                style={{ transform: "scale(1.5)" }}
                                className="fa fa-shopping-cart"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-70%",
                                    left: "130%",
                                    width: "1.3em",
                                    height: "1.3em",
                                    lineHeight: "1.4em",
                                    borderRadius: "50%",
                                    background: "#ff7c00",
                                    textAlign: "center",
                                    fontSize: "0.9em"
                                }}
                            >
                                {count}
                            </div>
                        </div>}

                        <div // ---------------------------FACEBOOK LOGIN
                        >
                        {/*
                           <FacebookProvider appId="106686149984565">
                                <Login
                                  scope="user_friends"
                                  onResponse={(e)=>this.props.actions.getFacebookResponse(e)}
                                  render={console.log("render")}
                                  // onError={this.handleError}
                                >
                                  <span>FBLogin</span>
                                </Login>
                            </FacebookProvider> 
                        
                            <FacebookLogin
                              appId="106686149984565"
                              cookie={true}
                              xfbml={true}
                              version='2.10'
                              autoLoad={false}
                              fields="name,email,friends,picture"
                              scope="public_profile,email,user_friends"
                              callback={(e)=>this.props.actions.getFacebookResponse(e)}
                              disableMobileRedirect={true}
                              textButton={'login'}
                            />
                            <br/>*/
                            }
                            { 
                                //this.props.fbProfile&&this.props.fbProfile.name
                            }
                        </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.menu.open,
    book: state.book,
    count: state.menu.count,
    order: state.order,
    routeChanged: state.menu.routeChanged,
    fbProfile: state.fbLogin.response
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
