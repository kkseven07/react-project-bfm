import React, { Component, PropTypes } from 'react'
import isArray  from 'lodash/isArray'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/zip'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'
import Background from './background'
const moduleDefaultExport = module => module.default || module

const esModule=(module, forceArray)=> {
  if (isArray(module)) {
    return module.map(moduleDefaultExport)
  }

  const defualted = moduleDefaultExport(module)
  return forceArray ? [defualted] : defualted
}

export default function asyncRoute(getComponent,moduleName) {
  return class AsyncRoute extends Component {

    static Component = null

    state = {
      Component: AsyncRoute.Component,
    }

    componentWillMount() {
      const { Component } = this.state
      if (!Component) {
        this._componentWillUnmountSubject = new Subject()

        const streams = [
          Component
            ? Observable.of(Component)
                .takeUntil(this._componentWillUnmountSubject)
            : Observable.fromPromise(getComponent())
                .delay(100)
                .map(esModule)
                .map(Component => {
                  AsyncRoute.Component = Component
                  return Component
                })
                .takeUntil(this._componentWillUnmountSubject)
        ]
        Observable.zip(...streams)
          .takeUntil(this._componentWillUnmountSubject)
          .subscribe(([Component]) => {
            if (this._mounted) {
              this.setState({Component})
            } else {
              this.state.Component = Component
            }

            this._componentWillUnmountSubject.unsubscribe()
          })
      }
    }

    componentDidMount() {
      this._mounted = true
    }

    componentWillUnmount() {
      if (this._componentWillUnmountSubject && !this._componentWillUnmountSubject.closed) {
        this._componentWillUnmountSubject.next()
        this._componentWillUnmountSubject.unsubscribe()
      }
    }

    render() {
      const loadingStyle={
        height:"20%",
        width:"20%",
        minWidth:200,
        background:"white",
        fontSize:25,
        fontFamily:"BebasBold"
      }
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : <Background isFetching zIndex="20">
        <div className="flex flex-center"
          style={loadingStyle}>
        Loading...</div></Background>
    }
  }
}