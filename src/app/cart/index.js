import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import Item from "./components/item";
import Logo from "../../../assets/icons/logo.png";
import reverse from "lodash/reverse";
import { Button, ErrorText } from "../shared";

let prices = {
    digital: 2900,
    soft19: 9900,
    soft23: 11900,
    hard19: 14900,
    hard23: 16900,
    deluxe: 39900,
    fumoney: 99000
};

class Cart extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    getWrapPrice = book => {
        return !book.gift_wrap ? 0 : book.format !== "digital" ? 1000 : 0;
    };

    getTotal = books => {
        return books.reduce((acc, book) => prices[book.format] + acc+this.getWrapPrice(book), 0);
    };

    render() {
        let { currentBookId, ...books } = this.props.book;
        let data = reverse(values(books));
        let total = this.getTotal(data);
        if (data.length < 1) {
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

                    <div style={{ margin: 30, fontFamily: "RobotoMedium" }}>
                        ВАША КОРЗИНА ПУСТА
                    </div>
                    <Button
                        width={310}
                        click={() => {
                            this.props.history.push("/");
                        }}
                    >
                        Найти подарок
                    </Button>

                </div>
            );
        }
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
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-center flex-column width-full"
                    >
                        <Item
                            history={this.props.history}
                            key={i}
                            book={item}
                            actions={this.props.actions}
                        />
                        <div
                            style={{
                                height: 1,
                                width: "85%",
                                background: "rgb(230,230,230)",
                                marginLeft: "2%"
                            }}
                        />
                    </div>
                ))}

                <div
                    className="flex flex-end width-full"
                    style={{
                        height: 100,
                        margin: 20
                    }}
                >
                    <div
                        className="flex flex-center space-between"
                        style={{
                            height: 55,
                            margin: 20,
                            width: 250,
                            padding: 7,
                            fontFamily: "RobotoRegular",
                            color: "rgb(120,120,120)",
                            fontSize: 22,
                            background: "rgb(240,240,240)",
                            marginRight: "12%"
                        }}
                    >
                        ИТОГО
                        <div
                            style={{
                                fontFamily: "RobotoMedium",
                                color: "black"
                            }}
                        >
                            {total} тг
                        </div>
                    </div>

                </div>

                <Button
                    width={310}
                    click={() => {
                        this.props.history.push("/order");
                    }}
                >
                    Перейти к оплате
                </Button>

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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
