import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import React from "react";
import { asyncModule } from "./shared";
const About = asyncModule(() => import("./about"), "About route");
const Home = asyncModule(() => import("./home"), "home");
const Contacts = asyncModule(() => import("./contacts"), "contacts route");
const Builder = asyncModule(() => import("./pages/pages"), "pages route");
const Cart = asyncModule(()=>import("./cart"),"cart route")
const Print = asyncModule(()=> import("./pages/print"), "print route")
const Order = asyncModule(()=>import("./order"),"order")
// import Order from './order'
import { routerActions } from "react-router-redux";
import { connect } from "react-redux";
import * as actions from "../business/actions";
import { bindActionCreators } from "redux";
import header from "./shared/components/header.css";
import { Background, Header, Loading } from "./shared";
const showHeader = location =>
    !location.pathname.includes("/books/") &&
    !location.pathname.includes("/pages/") &&
    !location.pathname.includes("/preview") &&
    !location.pathname.includes("/order") &&
    !location.pathname.includes("/cart");

class App extends React.Component {
    componentWillMount() {
        this.props.actions.loadCache();
        let OSName = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "Win";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "Mac";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "Mac";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Mac";
        this.props.actions.osName(OSName);
    }

    render() {
        const { match, location, history, ...props } = this.props;
        return (
            <div id="outer-container">
                <Loading />
                <Background zIndex="10">
                    modal...
                </Background>
                <Background zIndex="10">
                    zoomer...
                </Background>
                {showHeader(location) && <Header location={location}  history={history} />}
                <div id="wrap">
                    <div
                        styleName={
                            showHeader(location, match)
                                ? "header.upper-padding"
                                : ""
                        }
                    >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contacts" component={Contacts} />
                            <Route path="/books" component={Builder} />
                            <Route path="/books/:id" component={Builder} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/order" component={Order}/>
                            <Route
                                path="/pages/:book_id/:type"
                                component={Print}
                            />
                            <Redirect from="/*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    fetching: state.fetching,
    modalOpen: state.modalOpen
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...actions, ...routerActions }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
