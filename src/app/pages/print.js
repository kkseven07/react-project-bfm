import React from "react";

import Page from "./page";
import { connect } from "react-redux";
import * as actions from "../../business/actions";
import { bindActionCreators } from "redux";
class Print extends React.Component {
    componentWillMount() {
        const { book_id, type } = this.props.match.params;
        this.props.actions.getBookPage(book_id, type);
    }

    render() {
        if (!this.props.res.page) {
            return null;
        }
        let { page, book } = this.props.res;
        return (
                <Page url={this.props.url} print book={book} page={page} />
        );
    }
}
const mapStateToProps = state => ({
    res: state.page,
    url:state.init.url
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Print);
