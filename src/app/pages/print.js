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
        console.log(this.props);
        return (
            <div
                className="width-full flex flex-center"
                style={{ padding: 50 }}
            >
                <Page print book={book} page={page} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    res: state.page
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Print);
