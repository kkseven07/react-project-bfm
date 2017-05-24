import React from "react";
import Book from './book'
import Summary from './summary'
import "./item.css"
export default ({ book,history,actions }) => {
    return (
        <div className="width-full" styleName="container">
            <div
                className="width-full flex flex-center flex-wrap"
                styleName="r"
            >
                <div className="flex flex-center" styleName="elem one">
                    <Book history={history} book={book}/>

                </div>
                <div className="flex flex-center" styleName="elem two">
                    <Summary actions={actions} book={book}/>
                </div>
            </div>
        </div>
    );
};
