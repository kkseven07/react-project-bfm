import React from "react";
// import {utils,data} from "../shared"
import BookForm from "./components/bookForm";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Video from "./components/video";
import Product from "./components/product";
import { connect } from "react-redux";
import * as actions from "../../business/actions";
import { bindActionCreators } from "redux";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;
const scrollTo = () => {
    scroller.scrollTo("myScrollToElement", {
        duration: 300,
        delay: 0,
        offset: -70,
        smooth: true,
        containerId: "ContainerElementID"
    });
};
class Home extends React.Component {
    componentWillMount(){
        this.props.actions.setupScroll(scrollTo)
    }

    render() {
        const props=this.props
        // window.scrollTo(0, 0);
        return (
            <div className="full flex flex-center flex-column">
                <Gallery actions={props.actions} scrollTo={scrollTo} />
                <Video />
                <Element style={{ width: "100%" }} name="myScrollToElement">
                    <BookForm history={props.history} />
                </Element>
                <Product />
                <Reviews />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
