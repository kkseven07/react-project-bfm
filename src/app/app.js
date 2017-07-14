import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import React from "react";
import { asyncModule } from "./shared";
const About = asyncModule(() => import("./about"), "About route");
const Home = asyncModule(() => import("./home"), "home");
const Contacts = asyncModule(() => import("./contacts"), "contacts route");
const Builder = asyncModule(() => import("./pages/pages"), "pages route");
const Cart = asyncModule(() => import("./cart"), "cart route");
const Print = asyncModule(() => import("./pages/print"), "print route");
const Order = asyncModule(() => import("./order"), "order");
// import Order from './order'
// import Hope from "./pages/hoep"
import { routerActions } from "react-router-redux";
import { connect } from "react-redux";
import * as actions from "../business/actions";
import { bindActionCreators } from "redux";
import header from "./shared/components/header.css";
import { Background, Header, Loading } from "./shared";
const scr = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '148262285740491');
`;

const showHeader = location =>
    !location.pathname.match("/books/") &&
    !location.pathname.match("/pages/") &&
    !location.pathname.match("/preview") &&
    !location.pathname.match("/order") &&
    !location.pathname.match("/cart");

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
    componentDidMount() {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML =scr;
        document.head.appendChild(s);
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
                {showHeader(location) &&
                    <Header
                        scroll={this.props.scroll}
                        location={location}
                        history={history}
                    />}
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
                            <Route path="/order" component={Order} />
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
    modalOpen: state.modalOpen,
    scroll: state.init.scroll
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...actions, ...routerActions }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
