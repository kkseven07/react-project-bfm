import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import {utils,data} from "../shared"
import BookForm from "./components/bookForm";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;
export default (
    props // console.log(props)||
) => (
    <div className="full flex flex-center flex-column">

        <div
            onClick={() => {
                scroller.scrollTo("myScrollToElement", {
                    duration: 300,
                    delay: 50,
                    offset:-90,
                    smooth: true,
                    containerId: "ContainerElementID"
                });
            }}
        >
            click

        </div>
        <Gallery />
        <Element style={{width:"100%"}} name="myScrollToElement">
            <BookForm history={props.history} />
        </Element>
        <Footer />

    </div>
);
