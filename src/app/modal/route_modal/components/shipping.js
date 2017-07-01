import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div style={{fontSize:'1.6em'}}>
               Доставка
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0', lineHeight:'1.3'}}>
            	<div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'10px 0 20px 0'}}
            	>Где?</div>
                В данный момент, доставка осуществляется только по городу Алматы. В ближайшее время доставка
                будет работать по всему Казахстану. Свяжитесь с нами, чтобы узнать
                осуществляется ли доставка в ваш город.  

                <div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'10px 0 20px 0'}}
            	>Срок доставки</div> 
            	Товар будет доставлен в течение 4 рабочих дней после момента подтверждения заказа.
            </div>
        </div>
    );
};
