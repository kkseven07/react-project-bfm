import React from "react";
import "./leader.css";
import { cutString } from "../../shared/utils.js";
export default ({ page, book, ...props }) => (
    <div className="full flex-center" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div styleName="first">
            {page.data.leaders.map(({ leader, country }, i) => {
                if (country === "Федеративная Республика Германии") {
                    country = "ФРГ";
                }
                return (
                    // <ul>


                                <div key={i} styleName="box">
                                <li style={{position:'absolute', left:'-12%', transform:'scale(0.5)'}}/>
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
