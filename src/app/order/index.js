import React from "react";
import "./order.css";
import { Component, View, Text, Animated } from "react-native";

const tryTo = props => {
    return <div>hello</div>;
};
import Home from "../home";

class Order extends React.Component {
    render() {
        this.anim = this.anim || new Animated.Value(0.7);
        console.log(this.anim);
        return (
            <Animated.View
                onClick={() =>
                    console.log("here") ||
                    Animated.spring(this.anim, {
                        toValue: this.anim._value > 0.7 ? 0.7 : 1
                        // duration: 500
                    }).start()}
                style={{
                    // height:200,
                    // width:200,
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    // transformOrigin: "center right",
                    transform: [
                        {
                            translateX: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10]
                            })
                        },
                        // {
                        //     rotateY: this.anim.interpolate({
                        //         inputRange: [0.7, 1],
                        //         outputRange: ["0deg", "180deg"]
                        //     })
                        // },
                        // {
                        //     rotateZ: this.anim.interpolate({
                        //         inputRange: [0.7, 0.9, 1],
                        //         outputRange: ["0deg", "100deg", "180deg"]
                        //     })
                        // },
                        {
                            rotateX: this.anim.interpolate({
                                inputRange: [0.7, 0.9, 1],
                                outputRange: ["60deg", "100deg", "180deg"]
                            })
                        },
                        {
                            perspective:500
                        }



                        // {
                        //     skewY:100
                        // }
                    ],

                    // opacity: this.anim,
                    flex: 1
                }}
            >
                <View
                    styleName="r"
                    style={{
                        height: 500,
                        width: 500,
                        backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                        // perspective:1000
                    }}
                >
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                      <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>
                    <Text style={{fontSize:20,margin:10}}>
                        first react native component is finally component
                    </Text>

                </View>

            </Animated.View>
        );
    }
}
export default Order;
