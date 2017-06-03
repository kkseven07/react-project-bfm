import React from "react";
import "./leader.css";
import { cutString } from "../../shared/utils.js";
export default ({ page, book }) => (
    <div className="full flex-center" styleName="r">
        <div styleName="first">
            {page.data.leaders.map(({ leader, country }, i) => {
                if (country === "Федеративная Республика Германии") {
                    country = "ФРГ";
                }
                return (
                    // <ul>
                        
                            <div key={i} styleName="box">
                               <div styleName="country">{country}</div>
                                <div styleName="leader">{leader}</div>
                            </div>
                        
                    // </ul>
                );
            })}
        </div>
        <div styleName="second">
            <div styleName="year">{page.data.year}</div>
            <div styleName="fact">{cutString(page.data.fact,460)}</div>

        </div>

    </div>
);
