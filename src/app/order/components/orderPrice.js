import React from 'react';
import './orderPrice.css';

export default ({data, totalForBooks, wrapPrice, total, discount}) => {
	return (
		<div style={{width:'100%', flexDirection:'column'}} className="flex flex-center">
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
	            styleName="title"
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
	            <div>{totalForBooks} тг</div>
	        </div>
	        <div
	            styleName="summary"
	            className="flex flex-center space-between"
	        >
	            <div>Упаковка</div>
	            <div>{wrapPrice} тг</div>
	        </div>
			{discount!==0&&<div
	            styleName="summary"
	            className="flex flex-center space-between"
	        >
	            <div>Сумма</div>
	            <div>{total+discount} тг</div>
	        </div>}
	        {discount!==0&&<div
	            styleName="summary"
	            className="flex flex-center space-between"
	        >
	            <div>Cкидка</div>
	            <div>{discount} тг</div>
	        </div>}

	        <div
	            styleName="summary"
	            className="flex flex-center space-between"
	        >
	            <div>Итого</div>
	            <div>{total} тг</div>
	        </div>
		</div>
	);
}