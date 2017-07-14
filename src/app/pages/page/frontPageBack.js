import React from "react";
import "./frontPageBack.css";
export default ({ page, book }) => (
    <div className="full" styleName="r">
       <div styleName="text">
         НА ДОЛГУЮ ПАМЯТЬ,<br/>{book.sender_name}
       </div>

    </div>
);
