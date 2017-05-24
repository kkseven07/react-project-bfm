import React, { Component } from "react";
import "./pages.css";
import Page from "./page";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import Modal from "../modal/builder";
import Book from "./book";
import CoverChooser from "./page/coverChooser";

const BOOK_ID = 157;
import Hashids from "hashids";
export const decodeHashid = hashed => {
    let hashids = new Hashids("", 10);
    return hashids.decode(hashed);
};
class BookRoute extends Component {
    componentWillMount() {
            let hash_id = this.props.location.pathname.replace(/\/books\//, "");
            if (hash_id.length > 2 && !hash_id.match(/\/books/)) {
                let book_id = decodeHashid(hash_id)[0];
                let book = JSON.parse(localStorage.getItem(book_id));
                if (book) this.props.actions.loadFromCache(book);
                else {
                    this.props.actions.getBook(book_id);
                }
            }
    }
    componentDidMount() {
        if (!(this.props.history.action === "POP")) window.scrollTo(0, 0);
        else {
            window.scrollTo(0, 25000);
        }
    }
    componentWillUnmount() {
        this.props.actions.closeModal();
        this.props.actions.cleanBuilder();
    }
    render() {
        let { bookId, book } = this.props;

        let gift, data = [], bData;
        if (book[bookId]) {
            console.log("my book", book);
            data = values(book[bookId].pages);
            const { pages, ...rest } = book[bookId];
            bData = rest;
        }

        let pages = data;
        return (
            <div style={{ backgroundColor: "white", paddingBottom: 30 }}>
                <Modal />
                {book[bookId] &&
                    <div styleName="root">
                        <CoverChooser
                            page={
                                pages.filter(page => page.type === "cover")[0]
                            }
                        />
                        {pages.map((page, i) => (
                            <Page
                                url={this.props.url}
                                actions={this.props.actions}
                                book={bData}
                                id={page.type}
                                page={page}
                                key={i}
                            />
                        ))}
                    </div>}
                {book[bookId] &&
                    <Book
                        book={this.props.book}
                        history={this.props.history}
                    />}

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
