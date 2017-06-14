import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import {utils,data} from "../shared"
import BookForm from "./components/bookForm";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Video from "./components/video";
import Product from "./components/product"
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;
const scrollTo =()=> {
    scroller.scrollTo("myScrollToElement", {
                    duration: 300,
                    delay: 50,
                    offset:-70,
                    smooth: true,
                    containerId: "ContainerElementID"
                })
}
export default (
    props // //(props)||
) => (
    <div className="full flex flex-center flex-column">

        <Gallery scrollTo={scrollTo}/>
        <Video />
        <Element style={{width:"100%"}} name="myScrollToElement">
            <BookForm history={props.history} />
        </Element>
        <Product/>
        <Reviews />
        <Footer />

    </div>
);
