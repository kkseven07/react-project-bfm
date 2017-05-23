import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import Item from "./components/item";
import Logo from "../../../assets/icons/logo.png";
import reverse from "lodash/reverse";
class Cart extends React.Component {
    componentWillMount() {
        this.items = reverse(
            Object.keys(localStorage).map(key =>
                JSON.parse(localStorage.getItem(key))
            )
        );
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        if (!this.items) {
            return null;
        }

        return (
            <div className="flex flex-center width-full flex-column">

                <img
                    src={Logo}
                    style={{ width: 100, height: 100, marginBottom: 30 }}
                />

                {this.items.map((item, i) => <Item key={i} book={item} />)}

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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
