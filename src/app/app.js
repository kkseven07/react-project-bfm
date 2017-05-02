
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Home from "./home"
import About from './about'
import Builder from './pages/pages'
import Contacts from './contacts'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../business/actions'
import { bindActionCreators } from 'redux'
import header from './shared/components/header.css'
import {Background, Header} from './shared'

const showHeader = (location)=>(!location.pathname.match(/\/about/))

const App = ({location, history,...props}) => (
    // console.log(props,location,history)||
<div>
    <Background zIndex="10">
        Loading...
    </Background>

    {showHeader(location)&&<Header history={history}/>}

    <div styleName={showHeader(location)?"header.upper-padding":""} >
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/books" component={Builder}/>
            <Redirect from="/*" to="/"/>
        </Switch>
    </div>
</div>

)

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))