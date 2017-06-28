import React, { Component } from "react";
import "./backToHistory.css";
import { getDate } from "../../shared/utils.js";
const sum = facts => facts.reduce((acc, v) => v.length + acc, 0);
const getStyle = length =>
    length > 1000 && length < 1200
        ? "0.45em"
        : length > 100 && length < 800
              ? "0.57em"
              : length >= 1200 ? "0.4" : "0.535em";

export default ({ page, book }) => {
    const facts = page.data.facts;
    const fontSize = getStyle(sum(facts));
    return (
        <div className="full flex-center" styleName="r">
            <div styleName="date">
                <div styleName="gradient">{getDate(book.dob).day}</div>
                <div styleName="gradient">{getDate(book.dob).monthNumber}</div>

            </div>
            <div styleName="facts">
                {facts.map((fact, i) => (
                    <span key={i} style={{ fontSize }} styleName="text">
                        {fact}
                    </span>
                ))}
            </div>

        </div>
    );
};
