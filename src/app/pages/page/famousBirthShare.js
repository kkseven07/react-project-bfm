import React from "react";
import "./famousBirthShare.css";
import { getDate } from "../../shared/utils.js";

export default ({ book, page }) => (
    <div className="full" styleName="r">
        <div>
            <div>
                <div styleName="text">{getDate(book.dob).day}</div>
                <div styleName="text small">{getDate(book.dob).month}</div>
                <div styleName="text">{getDate(book.dob).year}</div>
            </div>
            <div styleName="facts-container">
                <div styleName="title">
                    Множество известных людей гордятся, что родились с вами в один день,
                    {"\n"}
                    {" "}
                    вот некоторые из них:
                </div>
                <div styleName="facts">
                    {page.data.facts.map((fact, i) => (
                        <div key={i}>{fact}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
