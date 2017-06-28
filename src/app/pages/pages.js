import React, { Component } from "react";
import "./pages.css";
import Page from "./page";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import Modal from "../modal/builder";
import Book from "./components/book";
import Menu from "./components/menu";
import CoverChooser from "./page/coverChooser";
const BOOK_ID = 157;
import Waypoint from "react-waypoint";
import Hashids from "hashids";
export const decodeHashid = hashed => {
    let hashids = new Hashids("", 10);
    return hashids.decode(hashed);
};
import BookOptions from "./components/bookOptions";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;
const scrollTo = () => {
    scroller.scrollTo("myScrollToElement", {
        duration: 200,
        delay: 50,
        smooth: true,
        containerId: "ContainerElementID"
    });
};
const throttle = (funcScroll, wait) => {
    var time = Date.now();
    return () => {
        if (time + wait - Date.now() < 0) {
            funcScroll();
            time = Date.now();
        }
    };
};

import CryptoJS from "crypto-js";

const decrypt = ciphertext => {
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), "secret key 123");
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
class BookRoute extends Component {
    state = {
        inside: true,
        first: false,
        second: false,
        firstEntered: false,
        secondEntered: false
    };
    componentWillMount() {
        //setup book from local storage
        let hash_id = this.props.location.pathname.replace(/\/books\//, "");
        if (hash_id.length > 2 && !hash_id.match(/\/books/)) {
            let book_id = decodeHashid(hash_id)[0];
            if (book_id === this.props.book.currentBookId) {
                return;
            }
            let book = JSON.parse(localStorage.getItem("bookKey_" + book_id));
            // let book = localStorage.getItem("bookKey_"+book_id)
            // book = decrypt(book)
            if (book) this.props.actions.loadFromCache(book);
            else {
                if (this.props.history.action === "PUSH") {
                    return;
                }
                this.props.actions.getBook(book_id);
            }
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", throttle(this.handleScroll, 1200));
    }
    componentWillUnmount() {
        this.props.actions.closeModal();
        this.props.actions.cleanBuilder();
        window.removeEventListener("scroll", throttle(this.handleScroll, 1200));
    }
    handleScroll = e => {
        if (!this.state.first && !this.firstEntered) {
            console.log("settin first state");
            this.setState({ firstEntered: true });
            setTimeout(() => this.setState({ first: true }), 500);
        } else if (
            this.state.first &&
            !this.state.second &&
            !this.secondEntered
        ) {
            console.log("setting second state");
            this.setState({ secondEntered: true });
            setTimeout(() => this.setState({ second: true }), 1000);
        }
    };

    _handleEnter = e => {
        if (!this.state.inside) this.setState({ inside: true });
    };
    _handleLeave = e => {
        if (this.state.inside) this.setState({ inside: false });
    };
    render() {
        let { bookId, book } = this.props;

        let gift, data = [], bData, cover;
        if (book[bookId]) {
            // console.log("my book", book);
            data = values(book[bookId].pages);
            const { pages, ...rest } = book[bookId];
            bData = rest;
            cover = data[0];
        }
        // let pages = data;
        let pages = data.filter(
            page =>
                ["frontPage", "frontPageBack", "endPage"].indexOf(page.type) < 0
        ); //.slice(10, 11);

        return (
            <div style={{ backgroundColor: "white", paddingBottom: 30 }}>
                <Modal />
                {book[bookId] &&
                    <Waypoint
                        onLeave={this._handleLeave}
                        onEnter={this._handleEnter}
                    >
                        <div styleName="root">
                            <CoverChooser
                                page={
                                    pages.filter(
                                        page => page.type === "cover"
                                    )[0]
                                }
                            />
                            {pages.map((page, i) => {
                                if (i > 10 && i < 25) {
                                    return (
                                        this.state.first &&
                                        <Page
                                            osName={this.props.osName}
                                            url={this.props.url}
                                            actions={this.props.actions}
                                            book={bData}
                                            id={page.type}
                                            page={page}
                                            key={i}
                                        />
                                    );
                                } else if (i > 25) {
                                    return (
                                        this.state.second &&
                                        <Page
                                            osName={this.props.osName}
                                            url={this.props.url}
                                            actions={this.props.actions}
                                            book={bData}
                                            id={page.type}
                                            page={page}
                                            key={i}
                                        />
                                    );
                                }
                                return (
                                    <Page
                                        osName={this.props.osName}
                                        url={this.props.url}
                                        actions={this.props.actions}
                                        book={bData}
                                        id={page.type}
                                        page={page}
                                        key={i}
                                    />
                                );
                            })}
                        </div>
                    </Waypoint>}
                {this.state.inside &&
                    <Menu
                        scroll={scrollTo}
                        actions={this.props.actions}
                        book={bData}
                        cover={data[0]}
                        history={this.props.history}
                    />}
                {book[bookId] &&
                    <Element style={{ width: "100%" }} name="myScrollToElement">
                        <BookOptions
                            history={this.props.history}
                            actions={this.props.actions}
                            color={cover.data.color}
                            book={bData}
                        />
                    </Element>}

            </div>
        );
    }
}
const mapStateToProps = state => ({
    book: state.book,
    bookId: state.book.currentBookId,
    osName: state.init.osName,
    url: state.init.url
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(BookRoute);
