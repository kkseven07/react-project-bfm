import React from "react";
import "./preview.css";
import { Component, View, Text, Animated, StyleSheet } from "react-native";

class flip extends React.Component {
    animate = () => {
        console.log("this.animate")
        Animated.stagger(4000, [
            Animated.timing(this.spinValue, {
                toValue: this.spinValue._value > 0 ? 0 : 1,
                duration: 1000
            }),
            Animated.timing(this.translate, {
                toValue: this.translate._value > 100 ? 100 : 1000
            })
        ]).start();
    };
    render() {
        this.spinValue = this.spinValue || new Animated.Value(0);
        this.translate = this.translate || new Animated.Value(1000);
        return (
            <View
                style={{
                    height: 300,
                    paddingTop: 200,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    perspective: 900
                }}
            >

                <Animated.View
                    onClick={this.animate}
                    style={[
                        styles.flippableView,
                        {
                            marginTop: 60,

                            height: 350,
                            width: 350,
                            backgroundColor: "orange",
                            shadowOffset: { width: 2, height: 2 },
                            shadowColor: "black",
                            shadowRadius: 2,
                            transformOrigin: "right",
                            transform: [
                                {
                                    translateX: this.spinValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [350, 350]
                                    })
                                },
                                {
                                    rotateY: this.spinValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["180deg", "2deg"]
                                    })
                                }
                                // {
                                //     rotateX: this.spinValue.interpolate({
                                //         inputRange: [0, 1],
                                //         outputRange: ["45deg", "180deg"]
                                //     })
                                // }
                            ]
                        }
                    ]}
                />

            </View>
        );
    }
}
var styles = StyleSheet.create({
    flippableView: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
        // backfaceVisibility: "hidden"
    }
});

export default flip;
