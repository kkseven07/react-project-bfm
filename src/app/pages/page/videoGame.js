import React from "react";
import "./videoGame.css";

export default ({ book, page, ...props }) => {
    const date = new Date(book.dob);
    return (
        <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
            <div
                className="absolute"
                styleName="text"
                style={{ color: page.data.meta }}
            >
                {date.getFullYear()}
            </div>
        </div>
    );
};
