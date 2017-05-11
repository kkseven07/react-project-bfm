import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import React from "react";
import { asyncModule } from "./shared";
const About = asyncModule(() => import("./about"), "About route");
const Home = asyncModule(() => import("./home"), "Home route");
const Contacts = asyncModule(() => import("./contacts"), "contacts route");
const Builder = asyncModule(() => import("./pages/pages"), "pages route");
import { routerActions } from "react-router-redux";
// import About from './about'
// import Home from './home'
// import Contacts from './contacts'

// import Builder from './pages/pages'
import { connect } from "react-redux";
import * as actions from "../business/actions";
import { bindActionCreators } from "redux";
import header from "./shared/components/header.css";
import { Background, Header, Loading } from "./shared";

const showHeader = location => !location.pathname.match(/\/books/);

const App = (
  { location, history, ...props } // console.log(props.actions.push("/books"))||
) => (
  <div>
    <Loading />

    <Background zIndex="10">
      modal...
    </Background>
    <Background zIndex="10">
      zoomer...
    </Background>

    {showHeader(location) && <Header history={history} />}

    <div styleName={showHeader(location) ? "header.upper-padding" : ""}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/books" component={Builder} />
        <Route path="/books/:id" component={Builder} />
        <Redirect from="/*" to="/" />

      </Switch>
    </div>
  </div>
);

const mapStateToProps = state => ({
  fetching: state.fetching,
  modalOpen: state.modalOpen
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions, ...routerActions }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
