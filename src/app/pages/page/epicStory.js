import React, { Component } from "react";
import "./epicStory.css";
import { monthsMapYa } from "../../shared/utils.js";
import invert from "lodash/invert";
import { View, Text, Animated, StyleSheet } from "react-native";
import { getDate } from "../../shared/utils.js";

class Page extends Component {
    setStyle = image_url => {
        if (image_url.match("v1")) return ["-v1"];
        else if (image_url.match("v2")) return ["-v2"];
        else return [""];
    };
    render() {
        // console.log("props", this.props)
        const uniqs = this.setStyle(this.props.page.primary_image.image.url);
        const vStyle = uniqs[0];
        let word = this.props.book.gender === "male" ? "РОДИЛСЯ " : "РОДИЛАСЬ";
        return (
            <div className="full flex" styleName="r">
                <div styleName={"greet"+vStyle}>ДОБРО ПОЖАЛОВАТЬ!</div>
                <div styleName={"part1"+vStyle}>
                    ЭТА КНИГА ПОВЕДАЕТ ВАМ ОБО ВСЕХ НЕВЕРОЯТНЫХ ФАКТАХ
                    И СОБЫТИЯХ, ТОЙ СЛАВНОЙ ЭПОХИ, КОГДА
                    {word}
                </div>
                <div styleName={"name"+vStyle}>{this.props.book.name}</div>
                <div styleName={"part2"+vStyle}>
                    ЗДЕСЬ СОБРАНЫ ВСЕ ИНТЕРЕСНЫЕ ФАКТЫ {" "+getDate(this.props.book.dob).year+" "}
                    ГОДА В ЛИТЕРАТУРЕ, КИНО И МУЗЫКЕ, ТАКИЕ КАК БЕСТСЕЛЛЕР ГОДА, БЛОКБАСТЕР ГОДА
                    И МУЗАКАЛЬНЫЙ ХИТ ГОДА.
                </div>
                <div styleName={"part3"+vStyle}>
                    ТАКЖЕ, МЫ ЗАГЛЯНЕМ В ПРОШЛОЕ И ПОСМОТРИМ, ЧТО ПРОИЗОШЛО
                    {" "+getDate(this.props.book.dob).dayNoZero+ " "+getDate(this.props.book.dob).monthYa+" "}
                    В РАЗНЫХ ИСТОРИЧЕСКИХ ЭПОХАХ. ВАС ЖДЕТ НЕЗАБЫВАЕМОЕ ПУТЕШЕСТВИЕ В ТОТ МИР
                    НАШЕЙ ГЕРОИНИ, КАКИМ ЕГО ВИДИТ <span>{this.props.book.sender_name}</span>
                </div>
                <div styleName={"end"+vStyle}>ИТАК, ВАШЕМУ ВНИМАНИЮ...</div>
            </div>
        );
    }
}

export default Page;
