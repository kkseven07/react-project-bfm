import React from "react";
import Background from "./background";
import "./loading.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
var Loader = require("halogen/GridLoader"); // var Loader = require('halogen/GridLoader');
// import Confetti from 'react-confetti'
// import Confetti from 'react-dom-confetti';
const Loading = props => {
   let text;

   if (props.type === "createBook") {
      text =
         "Создается книга \n" +
         '"' +
         (props.bookName.trim() === "" ? props.name : props.bookName) +
         '"';
   }else if(props.type==="updateOrder"){
      text = "Меняем формат книги..."
   }
   else {
      text = "Подгружаем книгу...";
   }

   return (
      <Background isOpen={props.isFetching} zIndex="25">
         <div className="flex flex-center flex-column" styleName="r">
            <Loader color="rgb(200,200,200)" size="20px" margin="4px" />
            <div style={{ height: 30 }} />
            {text}
         </div>
      </Background>
   );
};

const mapStateToProps = state => ({
   isFetching: state.loading.loading,
   type: state.loading.type,
   name: state.form.name.value,
   bookName: state.form.bookName.value,
});

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
