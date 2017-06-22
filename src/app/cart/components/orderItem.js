import React from "react";
import OrderBook from "./orderBooks";
import './orderItem.css'
//background:'rgba(153, 153, 153, 0.08)',
let prices = {
    digital: 2900,
    soft19: 9900,
    soft23: 11900,
    hard19: 14900,
    hard23: 16900,
    deluxe: 39900,
    fumoney: 99000
};
const getWrapPrice = book => {
        return !book.gift_wrap ? 0 : book.format !== "digital" ? 1000 : 0;
    };
const getTotal = books => {
        return books.reduce((acc, book) => prices[book.format] + acc+getWrapPrice(book), 0);
    };
export default ({ order, actions }) => {
    const {orderInfo} = order.orderDetails;
    const date = new Date(orderInfo.date);
    let total = getTotal(order.books);
    return (
        <div
            className="width-full"
            style={{
                paddingTop:'7vh',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                background:'rgba(142, 141, 141, 0.06)',
                padding:'20px 0',
                margin:'20px 0 40px 0'
            }}
        >
            <div
                style={{
                    display:'flex',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    width:'100%'
                }}
            >
                {order.books.map((book,i)=>(
                    <div key={i }className="flex flex-center" style={{ margin:'0 0.5%'}}>
                        <OrderBook book={book} />
                    </div>
                ))}

            </div>
            <div style={{width:'73%', justifyContent:'flex-end'}} className="flex">
                <div
                    styleName="elem"
                    style={{width:'200px', fontFamily:'RobotoMedium', fontSize:'1.3em', background:'#f0f0f0', padding:'0.5em'}}
                >
                        <div styleName="type">ИТОГО</div>
                        <div>{total}</div>
                </div>
            </div>
            <hr style={{width:'73%', margin:'15px 0'}}/>
            <div styleName="order-info">
            <div style={{
                fontFamily:'RobotoRegular'
            }}>
                    <div
                        style={{textAlign:'right', fontFamily:'RobotoMedium', fontSize:'1.3em', marginBottom:'1em'}}
                    >
                        Информация о заказе
                    </div>
                    <div styleName="elem">
                        <div styleName="type">Имя</div>
                        <div>{orderInfo.name}</div>
                    </div>
                    <div styleName="elem">
                        <div styleName="type">Адрес</div>
                        <div>{orderInfo.address}</div>
                    </div>
                    <div styleName="elem">
                        <div styleName="type">Номер заказа</div>
                        <div>{order.orderId}</div>
                    </div>
                    <div styleName="elem">
                        <div styleName="type">Время заказа</div>
                        <div>
                            {date.getHours()+":"+date.getMinutes()+", "}
                            {date.getDate()<10?'0'+date.getDate():date.getDate()}.
                            {date.getMonth()<9?`0${date.getMonth()+1}`:date.getMonth()+1}.
                            {date.getFullYear()}


                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};