import React from "react";
import "./gallery.css";
// import Slider from "react-slick";
import url from "../../../entry/url";
export default props => {
    return (
        <div
            className="width-full flex flex-center"
            style={{
                backgroundImage: `url(${url}/images/banner.jpg)`
            }}
            styleName="r"
        >
            <div
                onClick={() => {
                    props.scrollTo();
                    props.actions.setupBookType("you")
                }}
                styleName="start-btn"
            >
                Начать
            </div>
            <div styleName="text">СОЗДАЙ НЕЗАБЫВАЕМЫЙ ПОДАРОК</div>
        </div>
    );
};
