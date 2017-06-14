import React from "react";
import "./order.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import reverse from "lodash/reverse";
import { Button } from "../shared";
import Form from "./components/form";
import Logo from "../../../assets/icons/logo.png";

let prices = {
    digital: 2900,
    soft19: 9900,
    soft23: 11900,
    hard19: 14900,
    hard23: 16900,
    deluxe: 39900,
    fumoney: 99000
};

class Order extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getWrapPrice = book => {
        return !book.gift_wrap ? 0 : book.format !== "digital" ? 1000 : 0;
    };

    getTotal = books => {
        return books.reduce(
            (acc, book) => prices[book.format] + acc + this.getWrapPrice(book),
            0
        );
    };

    getTotalForBooks = books => {
        return books.reduce((acc, book) => prices[book.format] + acc,0);
    };

    render() {
        if (!this.props.book) {
            return null;
        }
        let { currentBookId, ...books } = this.props.book;
        let data = reverse(values(books));
        let totalForBooks = this.getTotalForBooks(data);
        let total = this.getTotal(data);
        let wrapPrice = total - totalForBooks;
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
                        maxWidth: 500,
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
                        {totalForBooks} тг
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
                        {wrapPrice} тг
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
                        {total} тг
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
                        maxWidth: 500,
                        fontFamily: "RobotoRegular"
                    }}
                >
                    Ваши детали
                </div>

                <Form form={this.props.form} actions={this.props.actions} />
                <div
                    style={{ maxWidth: 500, width: "90%" }}
                    className="flex space-between"
                >
                    <Button
                        click={() => {
                            this.props.history.push("/cart");
                        }}
                    >
                        Вернуться
                    </Button>
                    <Button
                        click={() => {
                            this.props.history.push("/cart");
                        }}
                    >
                        Заказать
                    </Button>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    book: state.book,
    form: state.order
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
