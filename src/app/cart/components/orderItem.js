import React from "react";
import OrderBook from "./orderBooks";
import './orderItem.css'
//background:'rgba(153, 153, 153, 0.08)',

export default ({ order, actions }) => {
    const {orderInfo, voucher} = order.orderDetails;
    const date = new Date(orderInfo.date);
    let total = order.orderDetails.price.total;
    let discount = order.orderDetails.price.discount;
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
            <div 
                style={{width:'73%', justifyContent:'flex-end', flexDirection:'column', alignItems:'flex-end'}} 
                className="flex"
                >
                {
                    discount!==0&&<div
                    styleName="elem"
                    style={{
                        width:'200px', fontFamily:'RobotoMedium', fontSize:'1.3em', background:'#f0f0f0', padding:'0.5em',
                        borderBottom:'1px solid rgb(181, 179, 179)'
                    }}
                    >
                        <div styleName="type">СУММА</div>
                        <div>{total+discount}</div>
                    </div>  
                }
                {
                     discount!==0&&<div
                    styleName="elem"
                    style={{
                        width:'200px', fontFamily:'RobotoMedium', fontSize:'1.3em', background:'#f0f0f0', padding:'0.5em',
                        borderBottom:'1px solid rgb(181, 179, 179)'
                    }}
                    >
                        <div styleName="type">СКИДКА</div>
                        <div>{discount}</div>
                </div>
                }
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