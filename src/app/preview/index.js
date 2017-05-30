import React from "react";
import "./preview.css";
import { Component, View, Text, Animated, StyleSheet } from "react-native";

class flip extends React.Component {
    animate = () => {
        console.log("this.animate");
        setImmediate(() => {
            requestAnimationFrame(() => {
                Animated.timing(this.spinValue, {
                    toValue: this.spinValue._value > 0 ? 0 : 1,
                    duration: 700
                }).start(k => {
                    if (!k.finished) return;
                });
            });
        });
    };
    render() {
        this.spinValue = this.spinValue || new Animated.Value(0);
        this.translate = this.translate || new Animated.Value(1000);
        return (
            <View
                style={{
                    height: 300,
                    paddingTop: 200,
                    flexDirection: "row"
                }}
            >

                <Animated.View
                    onClick={this.animate}
                    style={[
                        styles.flippableView,
                        {
                            margin:100,
                            height: 400,
                            width: 400,
                            backgroundColor: "orange",
                            shadowOffset: { width: 2, height: 2 },
                            shadowColor: "black",
                            shadowRadius: 2,
                            transformOrigin: "right",
                            // perspective:500,
                            transform: [
                                { perspective: 1300 },
                                {
                                    rotateY: this.spinValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg", "180deg"]
                                    })
                                }
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

        // backfaceVisibility: "hidden"
    }
});

export default flip;
