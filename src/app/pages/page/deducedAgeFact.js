import React, { Component } from "react";
import "./deducedAgeFact.css";
import { checkLength } from "../../shared/utils";
const setStyle = image_url => {
    if (image_url.match("v1")) return [""];
    else if (image_url.match("v2")) return ["-v2"];
    else if (image_url.match("v3")) return ["-v3"];
    else return [""];
};
export default ({ page, book, ...props }) => {
    const uniqs = setStyle(page.primary_image.image.url)[0];
    return (
        <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
            <div styleName="top-part">
                <div
                    styleName={`name${uniqs} name positioned`}
                    style={{ fontSize: book.name.trim().indexOf(" ")>-1?'0.85em':checkLength(book.name, 10, 1.5) }}
                >
                    {book.name},
                </div>
                <div
                    styleName={`age${uniqs} age positioned`}
                    style={{ top: props.osName === "Mac" && "9%" }}
                >
                    {book.age}
                </div>
                <div
                    styleName={`days-alive days-alive${uniqs} positioned`}
                    style={{ top: props.osName === "Mac" && "63.3%" }}
                >
                    {page.data.days_alive}
                </div>
                <div
                    styleName={`smiles-count${uniqs} smiles-count positioned`}
                    style={{ top: props.osName === "Mac" && "60%" }}
                >
                    {page.data.smiles_count}
                </div>
            </div>
            <div styleName="bottom-part">
                <div
                    styleName={`heart-beats${uniqs} heart-beats positioned`}
                    style={{ top: props.osName === "Mac" && "15.5%" }}
                >
                    {page.data.heart_beats}
                </div>
                <div styleName={`dream-time${uniqs} dream-time positioned`}>
                    {page.data.dream_time}
                </div>
                <div styleName={`tears-total${uniqs} tears-total positioned`}>
                    {page.data.tears_total}
                </div>
                <div styleName={`tears-sad${uniqs} tears-sad positioned`}>
                    {page.data.tears_sad}
                </div>
                <div styleName={`tears-joy${uniqs} tears-joy positioned`}>
                    {page.data.tears_joy}
                </div>
                <div styleName={`tears-pain${uniqs} tears-pain positioned`}>
                    {page.data.tears_pain}
                </div>
                <div
                    styleName={`eat-in-kilos${uniqs} eat-in-kilos positioned`}
                    style={{ top: props.osName === "Mac" && "51.3%" }}
                >
                    {Math.round(parseFloat(page.data.eat_in_kilos))}
                </div>
                <div
                    styleName={`eat-in-elephants${uniqs} eat-in-elephants positioned`}
                    style={{ top: props.osName === "Mac" && "51.3%" }}
                >
                    {page.data.eat_in_elephants}
                </div>
                <div
                    styleName={`goda${uniqs} goda positioned`}
                >ГОДА</div>

            </div>
        </div>
    );
};