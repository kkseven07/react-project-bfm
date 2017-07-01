import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div style={{fontSize:'1.6em'}}>
               Оплата
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0', lineHeight:'1.3'}}>
            	На данный момент мы принимаем оплату переводом через банковскую систему {" "}
            	<a href="http://qiwi.kz/Home/moneytransfers/" style={{textDecoration:'underline'}}>QIWI</a>.
            	<div style={{textAlign:'center', padding:'7px 0'}}>
            		<span style={{borderBottom:'2px solid orange'}}><span>Счет QIWI: </span> +7 777 777 77 77</span>
            	</div>
            	<div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'20px 0'}}
            	>Вы можете воспользоваться двумя способами:</div>
            	<div>1.
            		<a
            			target="_blank" 
            			href="https://qiwi.com/payment/form.action?provider=99" 
            			style={{textDecoration:'underline'}}
            		>
						 Оплата через перевод с кошелька QIWI
            		</a>
            	</div>
            	<div>2.
            		<a
            			target="_blank" 
            			href="https://qiwi.com/replenish/categories/qiwi-terminals/qiwi-kazakhstan.action" 
            			style={{textDecoration:'underline'}}
            		>
            			 Пополнение через терминал QIWI
            		</a>
            	</div>
				<div 
            		style={{fontFamily:'BebasBold', fontSize:'1.3em', padding:'20px 0'}}
            	>ОБЯЗАТЕЛЬНО:</div>
            	В процессе перевода или пополнения, укажите в комментарии номер заказа. 
            	Номер будет указан в корзине, в информации о заказе, по завершении оформления заказа.   
            </div>
        </div>
    );
};
