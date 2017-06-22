import React from "react";
import "./quotes.css";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text">
            {page.data.text?page.data.text:'Сделай так, чтобы получить то, что ты хочешь, иначе тебе придётся любить то, что ты имеешь.'}
        </div>
        <div styleName="author">
            {page.data.text1?page.data.text1:'Джордж Бернард Шоу'}
        </div>
    </div>
);
