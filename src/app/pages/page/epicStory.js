import React, { Component } from "react";
import "./epicStory.css";
import { monthsMapYa } from "../../shared/utils.js";
import invert from "lodash/invert";
import { View, Text, Animated, StyleSheet } from "react-native";
const getDate = (date, map) => {
    let dateTemp = new Date(date);
    dateTemp.toISOString();
    return (
        dateTemp.getDate() +
        " " +
        map[dateTemp.getMonth()].toLowerCase() +
        " " +
        dateTemp.getFullYear()
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
        if (text === "text-v1") {
            return (
                <div className="full" styleName="r">
                    <View
                        style={{
                            position: "absolute",
                            top: "70%",
                            left: "37%",
                            zIndex:0,
                            transform: [
                                // { rotateY: "-14deg" },
                                { rotateZ: "-2deg" }
                            ]
                        }}
                    >
                        <Text>Hello my friend</Text>
                    </View>
                </div>
            );
        }
        return null;
        // return (
        //     <div className="full" styleName="r">
        //         <div className="absolute" styleName={text}>
        //             {"И как результат," + "\n " + date + " года "}
        //         </div>
        //     </div>
        // );
    }
}

export default Page;
