import React from "react";
import "./leader.css";

export default ({ page, book }) => (
    <div className="full flex-center" styleName="r">
        <div styleName="first">
            {page.data.leaders.map(({ leader, country }, i) => {
                if (country === "Федеративная Республика Германии") {
                    country = "ФРГ";
                }
                return (
                    <div key={i} styleName="box">
                        <div styleName="country">{country}</div>
                        <div styleName="leader">{leader}</div>
                    </div>
                );
            })}
        </div>
        <div styleName="second">
            <div styleName="year">{page.data.year}</div>
            <div styleName="fact">{page.data.fact}</div>
        </div>

    </div>
);
