import React from "react";

export default ({ order, actions }) => {
    console.log("order", order.books)

    return (
        <div className="width-full" >
            <div>
                {order.books.map((book,i)=>(
                    <div key={i}>{book.name}</div>
                ))}
            </div>
            <div>{order.orderDetails.price.total}</div>
        </div>
    );
};