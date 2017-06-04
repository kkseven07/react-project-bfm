import React from "react";
import "./gallery.css";
import Slider from "react-slick";
import Banner from '../../../../assets/img/banner.jpg'
export default props => {
    return (
        <div className="width-full flex flex-center" styleName="r">
        <div onClick={props.scrollTo} styleName="start-btn">Начать</div>
            <div styleName="text" >СОЗДАЙ НЕЗАБЫВАЕМЫЙ ПОДАРОК</div>
        </div>
    );
};
