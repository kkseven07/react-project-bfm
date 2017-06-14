import React from "react";
import "./videoGame.css";

export default ({ book, page }) => {
    const date = new Date(book.dob);
    return (
        <div className="full" styleName="r">
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
