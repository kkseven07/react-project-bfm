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
    state={canConfirm:false}

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.form.canConfirm&&this.state.canConfirm===false) {
            this.setState({canConfirm:true});
            this.props.actions.confirmOrder(
                this.books,
                {
                    price:{
                        total:this.total,
                        totalForBooks:this.totalForBooks,
                        wrapPrice:this.wrapPrice
                    },
                    orderInfo:{
                        name:this.props.form.name.value,
                        phone:this.props.form.phone.value,
                        address:this.props.form.address.value,
                        email:this.props.form.email.value,

                    }
                }
            );
        }
    };
    render() {
        if (!this.props.book) {
            return null;
        }
        let { currentBookId, ...books } = this.props.book;
        console.log("booksCart", books)
        // let data = reverse(values(books));
        let data = reverse(values(books));

        let totalForBooks=this.getTotalForBooks(data);
        let total = this.getTotal(data);
        let wrapPrice = total - totalForBooks;

        this.totalForBooks=totalForBooks;
        this.wrapPrice=wrapPrice;
        this.total=total;
        this.books=Object.keys(books).map((k) => books[k]);

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
                            width: "100%",
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
                        <div
                        >
                            Итого
                        </div>

                        <div>
                            {total} тг
                        </div>
                    </div>

                    {this.state.canConfirm&&<div
                         //CONFIRMED ORDER STATUS BAR
                        style={{
                                width:'100%',
                                maxWidth:'500px',
                                display:'flex',
                                alignItems:'center',
                                flexDirection:'column'
                        }}
                    >
                        <div>Поздравляем! Ваш заказ принят. В течение часа с вами свяжется консультант для подтверждения заказа.</div>
                    </div>
                    }

                    {!this.state.canConfirm&&<div
                        // ORDER DETAILS
                        style={{
                            width:'100%',
                            maxWidth:'500px',
                            display:'flex',
                            alignItems:'center',
                            flexDirection:'column'
                        }}
                    >
                    <div
                        className="flex-start"
                        style={{
                            margin: 10,
                            paddingLeft: 5,
                            marginTop: 20,
                            width: "100%",
                            fontSize: 25,
                            maxWidth: 500,
                            fontFamily: "RobotoRegular"
                        }}
                    >
                        Ваши детали
                    </div>
                    <Form form={this.props.form} actions={this.props.actions}/>
                    <div
                        style={{ maxWidth: 500, width: "100%" }}
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
                                // console.log("console in order create order")
                                this.props.actions.createOrder({orderDetails:{phone:555}, books:[1,2,3]})
                                this.props.actions.validateForm();
                            }}
                        >
                            Заказать

                        </Button>
                    </div>

                </div>}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    book: state.book,
    form:state.orderForm,
    order:state.order
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);