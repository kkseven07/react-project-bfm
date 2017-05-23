import React from "react";
import Book from './book'
import Summary from './summary'
import "./item.css"
export default ({ book }) => {
    return (
        <div className="width-full" styleName="container">

            <div
                className="width-full flex flex-center flex-wrap"
                styleName="r"
            >
                <div className="flex flex-center" styleName="elem">
                    <Book book={book}/>

                </div>
                <div className="flex flex-center" styleName="elem">
                    <Summary book={book}/>
                </div>

            </div>

        </div>
    );
};
