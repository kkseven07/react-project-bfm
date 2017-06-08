import invert from "lodash/invert";
import React from "react";
import "./cell.css";
import { cellTime, monthsMapYe } from "../../shared/utils.js";

const getDate = raw => {
    const date = new Date(raw);
    const time = cellTime(date.getMonth(), date.getFullYear());
    return `${invert(monthsMapYe)[time.month-1]} ${time.year}`;
};

export default ({ book }) => (
    <div className="full flex-center" styleName="r">
        <div styleName="text">
            в {getDate(book.dob)} года <br />
            Вы провели 30 минут в состоянии <br />
            одной клетки
        </div>
    </div>
);
