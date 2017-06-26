import React from "react";
import Page from "./page";
import { connect } from "react-redux";
import * as actions from "../../business/actions";
import { bindActionCreators } from "redux";
import values from "lodash/values";
class Print extends React.Component {
    componentWillMount() {
        const { book_id, type } = this.props.match.params;
        let book = JSON.parse(localStorage.getItem("bookKey_" + book_id));
        if (book) {
            console.log("getting book from cache");
            this.props.actions.loadFromCache(book);
        } else {
            this.props.actions.getBook(book_id);
        }
    }

    render() {
        const { book_id, type } = this.props.match.params;
        let { bookId, book } = this.props;
        if (!book[bookId]) return null;
        const { pages, ...rest } = book[book_id];
        const bData = rest;
        const page = values(pages).filter(page => page.type === type)[0];

        return <Page url={this.props.url} print book={bData} page={page} />;
    }
}
const mapStateToProps = state => ({
    url: state.init.url,
    book: state.book,
    bookId: state.book.currentBookId
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Print);
