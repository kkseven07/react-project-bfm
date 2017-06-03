import React, { Component } from "react";
import "./deducedAgeFact.css";
import { checkLength } from "../../shared/utils";

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="top-part">
            <div
                styleName="name positioned"
                style={{ fontSize: checkLength(book.name, 10, 1.5) }}
            >
                {book.name},
            </div>
            <div styleName="age positioned">{book.age}</div>
            <div styleName="days-alive positioned">{page.data.days_alive}</div>
        </div>
        <div styleName="bottom-part">
            <div styleName="heart-beats positioned">
                {page.data.heart_beats}
            </div>
            <div styleName="dream-time positioned">{page.data.dream_time}</div>
            <div styleName="tears-total positioned">
                {page.data.tears_total}
            </div>
            <div styleName="tears-sad positioned">{page.data.tears_sad}</div>
            <div styleName="tears-joy positioned">{page.data.tears_joy}</div>
            <div styleName="tears-pain positioned">{page.data.tears_pain}</div>
            <div styleName="eat-in-kilos positioned">
                {page.data.eat_in_kilos}
            </div>
            <div styleName="eat-in-elephants positioned">
                {page.data.eat_in_elephants}
            </div>
            <div styleName="smiles-count positioned">
                {page.data.smiles_count}
            </div>
            <div styleName="smiles-in-meters positioned">
                {page.data.smiles_in_meters}
            </div>
            <div styleName="tortois-minutes positioned">
                {page.data.tortoise_minutes}
            </div>
            <div styleName="smile-again positioned">
                {page.data.smiles_count + 1}
            </div>
        </div>
    </div>
);
