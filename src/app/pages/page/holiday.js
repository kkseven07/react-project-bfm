import React from "react";
import "./holiday.css";
import { getDate } from "../../shared/utils.js";
export default ({ page, book, ...props }) => {
    if(!page.data.holiday){
        return null
    }
    const ls = page.data.holiday.split("-");
    const first = ls[0].trim().split(" ");
    const day = first[0];
    const month = first[1];
    const holiday = ls[1].trim();
    return (
        <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
            <div styleName="default-text">
                вот еще один повод собраться в
                {" "}
                {getDate(book.dob).monthYe}
                , помимо вашего дня рождения
            </div>
            <div className="absolute" styleName="date">

                <div styleName="day">{day}</div>
                <div styleName="month">{month.toUpperCase()}</div>
            </div>
            <div className="absolute" styleName="holiday">
                <div
                    className="flex flex-center"
                    style={{ height: "100%", width: "100%" }}
                >
                    {holiday.toUpperCase()}
                </div>
            </div>
        </div>
    );
};
