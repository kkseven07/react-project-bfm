import React, { Component } from "react";
import "./epicStory.css";
import { monthsMapYa } from "../../shared/utils.js";
import invert from "lodash/invert";

const getDate = (date, map) => {
    let dateTemp = new Date(date);
    dateTemp.toISOString();
    return (
        dateTemp.getUTCDate() +
        " " +
        map[dateTemp.getUTCMonth()].toLowerCase() +
        " " +
        dateTemp.getUTCFullYear()
    );
};

class Page extends Component {
     setStyle = image_url => {
        if (image_url.match("v1")) return ["text-v1"];
        else if (image_url.match("v2")) return ["text-v2"];
        else return ["no-image"];
    };
    render() {
        const uniqs = this.setStyle(this.props.page.primary_image.image.url);
        const text = uniqs[0];
        let word = this.props.book.gender === "male" ? "родился " : "родилась ";
        let date = getDate(this.props.book.dob, invert(monthsMapYa));
        return (
            <div className="full" styleName="r">
                <div className="absolute" styleName={text}>
                    {"И как результат," +
                        "\n " +
                        date +
                        " года " +
                        word +
                        this.props.book.name}
                </div>
            </div>
        );
    }
}

export default Page;
