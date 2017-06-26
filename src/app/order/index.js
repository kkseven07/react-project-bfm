import React from "react";
import "./order.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import values from "lodash/values";
import * as actions from "../../business/actions/index.js";
import reverse from "lodash/reverse";
import { Button, Input, ErrorText } from "../shared";
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
    state={showConfirm:false}

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

        let totalForBooks=this.getTotalForBooks(data);
        let total = this.getTotal(data);
        let wrapPrice = total - totalForBooks;
        this.totalForBooks=totalForBooks;
        this.wrapPrice=wrapPrice;
        this.total=total;
        this.books=Object.keys(books).map((k) => books[k]);
        this.date = new Date();
        let order ={
            books:this.books,
            orderDetails: {
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
                        date: this.date
                    }
            }
        };
        if (data.length<1&&!this.state.showConfirm) return (
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
                <div style={{fontSize:'1.2em', paddingTop:'100px', paddingBottom:'15px'}}>
                    Вы уже сделали заказ. Вы можете посмотреть ваши заказы.
                </div>
                <Button
                    click={()=>{this.props.history.push("/cart")}}
                >Страница заказов</Button>
            </div>
        )
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

                    {!this.state.showConfirm&&<div style={{width:'100%', flexDirection:'column'}} className="flex flex-center">
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

                        <div
                            style={{display:'flex', width:'90%', maxWidth:'500px', padding:'20px 0', justifyContent:'space-between',
                                alignItems:'flex-start'
                            }}>
                            <div style={{width:'18%'}}>
                                <Input
                                    maxLength={6}
                                    placeholder="1A2B3C"
                                    field={this.props.form.promo}
                                    fieldType={"promo"}
                                    enter={this.props.actions.orderInput}
                                />
                                <ErrorText text={this.props.form.promo.errorText} />
                            </div>
                            <Button>Применить</Button>
                        </div>
                    </div>}
                    {this.state.showConfirm&&<div
                         //CONFIRMED ORDER STATUS BAR
                        style={{
                                width:'100%',
                                maxWidth:'500px',
                                display:'flex',
                                alignItems:'center',
                                flexDirection:'column'
                        }}
                    >
                        <div
                            style={{marginTop:'40px', fontSize:'1.1em', padding:'14px', textAlign:'center'}}
                        >
                            Поздравляем! Ваш заказ принят. В течение часа с вами свяжется консультант для подтверждения заказа.
                        </div>
                        <Button
                            click={()=>{this.props.history.push("/cart")}}
                        >
                            Страница заказов
                        </Button>
                    </div>
                    }

                    {!this.state.showConfirm&&<div
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
                                this.props.actions.validateForm(order);
                                this.setState({showConfirm:true})
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
    order:state.order,
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);