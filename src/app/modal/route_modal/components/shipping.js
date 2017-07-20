import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div style={{fontSize:'1.6em'}}>
               Доставка и сроки изготовления
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0', lineHeight:'1.3'}}>
                <div 
                    style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'10px 0 20px 0'}}
                >Время изготовления</div> 
                Заказ подается на печать после подтверждения заказа на основе 100% предоплаты.
                Время изготовления заказа варируется от 3 до 7 рабочих дней. Уточняйте срок изготовления по телефону или почте.

            	<div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'10px 0 20px 0'}}
            	>Куда осуществляется доставка?</div>
                В данный момент, доставка осуществляется только по всему Казахстану. Свяжитесь с нами, чтобы узнать
                осуществляется ли доставка в ваш район.  

                <div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'10px 0 20px 0'}}
            	>Срок доставки</div> 
            	Товар будет доставлен в течение 1-3 рабочих дней в города Казахстана.
            </div>
        </div>
    );
};
