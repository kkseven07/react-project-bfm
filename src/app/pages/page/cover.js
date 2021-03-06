import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../business/actions/index.js";
import "./cover.css";
import { getBookName, textColor } from "../../shared/utils.js";
import {Paspartu} from '../../shared';
class Cover extends Component {

   render() {
      let name = getBookName(this.props.book.book_name, this.props.book.name)
      const {text_color, background} = this.props.page.data
      return (
         <div
            styleName="r"
            className="app-blue"
            style={{ background: background, fontSize:'3.2em' }}
         >
            <Paspartu
               name={name}
               page={this.props.page}
            />

         </div>
      );
   }
}

const mapStateToProps = state => ({
   // color: state.edit.coverColor,
});

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
//style={{ color: textColor(this.props.color) }}
