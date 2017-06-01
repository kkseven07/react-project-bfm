import React from "react";
import "./order.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import reverse from "lodash/reverse";
const tryTo = props => {
    return <div>hello</div>;
};
import Logo from "../../../assets/icons/logo.png";
class Order extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getTotal = books => {
        return books.reduce(
            (acc, book) =>
                parseInt(book.order.price.replace("тг", "").trim()) + acc,
            0
        );
    };

    getTotalForBooks = books => {
        return books.reduce(
            (acc, book) => parseInt(book.order.data.book_price.trim()) + acc,
            0
        );
    };

    getWrapPrice = books => {
        return books.reduce(
            (acc, book) => book.order.data.gift_wrap===""?0:1000 + acc,
            0
        );
    };

    render() {
        let { currentBookId, ...books } = this.props.book;
        let data = reverse(values(books));
        let total = this.getTotal(data);
        return (
            <div
                className="flex flex-center width-full flex-column"
                style={{ paddingBottom: 50 }}
            >
                <img
                    onClick={() => {
                        this.props.history.push("/");
                    }}
                    src={Logo}
                    style={{ width: 100, height: 100, marginBottom: 10 }}
                />
                <div
                    className="flex-start"
                    style={{
                        margin: 10,
                        paddingLeft: 5,
                        marginTop: 10,
                        width: "90%",
                        fontSize: 25,
                        maxWidth: 700,
                        fontFamily: "RobotoRegular"
                    }}
                >
                    Ваш заказ
                </div>
                <div
                    styleName="summary first"
                    className="flex flex-center space-between"
                >
                    <div>
                        {data.length > 1 ? "Книги" : "Книга"}
                    </div>

                    <div>
                        {this.getTotalForBooks(data)}
                    </div>
                </div>
                <div
                    styleName="summary"
                    className="flex flex-center space-between"
                >
                    <div>
                        Упаковка
                    </div>

                    <div>
                        {this.getWrapPrice(data)}
                    </div>
                </div>
                <div
                    styleName="summary"
                    className="flex flex-center space-between"
                >
                    <div>
                        Итого
                    </div>

                    <div>
                        {total}
                    </div>
                </div>

                <div
                    className="flex-start"
                    style={{
                        margin: 10,
                        paddingLeft: 5,
                        marginTop: 20,
                        width: "90%",
                        fontSize: 25,
                        maxWidth: 700,
                        fontFamily: "RobotoRegular"
                    }}
                >
                    Ваши детали
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    book: state.book
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
