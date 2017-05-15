import React from "react";
import Text from "./text";
import invert from "lodash/invert";
import Buttons from "./buttons";
const level = 51.43;
import { Motion, spring } from "react-motion";
export const female = {
    карьеристка: 0,
    умница: 6,
    звездочка: 5,
    гик: 4,
    домоседка: 3,
    пацанка: 2,
    спортсменка: 1
};
import "./qualityTable.css";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

export default ({ page, book, actions, step }) => {
    const turnLeft = () => {
        actions.rotateQualityTable(false);
    };
    const turnRight = () => {
        actions.rotateQualityTable(true);
    };
    const deg = level * step + "deg";
    console.log("here is the step ", step);
    const val = level * step;
    let mainButtonRotation = {
        rotate: spring(val, { stiffness: 200, damping: 20 })
    };

    return (
        <div className="flex flex-column width-full flex-center relative">
            <div
                style={{
                    zIndex: 10,
                    position: "absolute",
                    top: "13%",
                    left: "11%",
                    bottom: "14%",
                    right: "12%",
                    borderRadius: "50%"
                }}
                styleName="pizza"
            />
            <Text>
                Как вы думаете кто из следующих персонажей, {book.name}?
            </Text>
            <div
                className="flex flex-center"
                style={{ marginBottom: 20, marginTop: 20 }}
            >

                <div onClick={turnLeft} style={{ margin: 10, marginRight: 20 }}>
                    left
                </div>
                <Motion style={mainButtonRotation}>
                    {({ rotate }) => (
                        <img
                            onClick={e => {
                                e.preventDefault();
                            }}
                            style={{
                                borderRadius: "50%",
                                height: "75%",
                                width: "75%",
                                transform: `rotate(${rotate}deg)`
                            }}
                            src={
                                "http://localhost:4000" +
                                    page.primary_image.image.url
                            }
                        />
                    )}
                </Motion>

                <div onClick={turnRight} style={{ margin: 10 }}>right</div>

            </div>
            <div>{invert(female)[step % 7]}</div>

            <Buttons close={actions.closeModal} />

        </div>
    );
};
