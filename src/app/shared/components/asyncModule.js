import React, { Component, PropTypes } from "react";
import isArray from "lodash/isArray";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/observable/zip";
import "rxjs/add/observable/of";
import "rxjs/add/observable/fromPromise";
import "./loading.css";
import Background from "./background";
var Loader = require("halogen/GridLoader"); // var Loader = require('halogen/GridLoader');

const moduleDefaultExport = module => module.default || module;

const esModule = (module, forceArray) => {
   if (isArray(module)) {
      return module.map(moduleDefaultExport);
   }

   const defualted = moduleDefaultExport(module);
   return forceArray ? [defualted] : defualted;
};

export default function asyncRoute(getComponent, moduleName) {
   return class AsyncRoute extends Component {
      static Component = null;
      static open = true

      state = {
         Component: AsyncRoute.Component,
         open: AsyncRoute.open
      };

      componentWillMount() {
         const { Component } = this.state;
         if (!Component) {
            this._componentWillUnmountSubject = new Subject();

            const streams = [
               Component
                  ? Observable.of(Component).takeUntil(
                       this._componentWillUnmountSubject
                    )
                  : Observable.fromPromise(getComponent())
                       .map(esModule)
                       .map(Component => {
                          AsyncRoute.Component = Component;
                          AsyncRoute.open = false
                          return Component;
                       })
                       .takeUntil(this._componentWillUnmountSubject)
            ];
            Observable.zip(...streams)
               .takeUntil(this._componentWillUnmountSubject)
               .subscribe(([Component]) => {
                  if (this._mounted) {
                     this.setState({ Component });
                  } else {
                     this.state.Component = Component;
                  }

                  this._componentWillUnmountSubject.unsubscribe();
               });
         }
      }

      componentDidMount() {
         this._mounted = true;
      }

      componentWillUnmount() {
         if (
            this._componentWillUnmountSubject &&
            !this._componentWillUnmountSubject.closed
         ) {
            this._componentWillUnmountSubject.next();
            this._componentWillUnmountSubject.unsubscribe();
         }
      }

      render() {
         const { Component } = this.state;
         let loading = null;
         // if (moduleName === "home") {
         //    loading = (
         //       <Background isOpen={this.state.open} zIndex="25">
         //          <div className="flex flex-center flex-column" styleName="r">
         //             <Loader
         //                color="rgb(200,200,200)"
         //                size="20px"
         //                margin="4px"
         //             />
         //             <div style={{ height: 30 }} />
         //             ДОБРО ПОЖАЛОВАТЬ
         //          </div>
         //       </Background>
         //    );
         // }
         // else{
         //    return Component&&<Component {...this.props}/>
         // }
         // if (Component && moduleName==="home") {
         //    //("module name", moduleName)
         //    setTimeout(() => this.setState({ open: false }), 500);

         //    return (
         //       <div>
         //          <Component {...this.props} />
         //          {loading}
         //       </div>
         //    );
         // }

         return Component&&<Component {...this.props} />;
      }
   };
}
