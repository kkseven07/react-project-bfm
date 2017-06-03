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
export const male = {
    карьерист: 0,
    геймер: 1,
    тусовщик: 2,
    экстремал: 6,
    романтик: 5,
    весельчак: 4,
    домосед: 3
};
export const femaleE = {
    карьеристка: "сareerist",
    умница: "smart",
    звездочка: "star",
    гик: "geek",
    домоседка: "homebody",
    пацанка: "tomgirl",
    спортсменка: "sport"
};
export const maleE = {
    карьерист: "careerist",
    геймер: "gamer",
    тусовщик: "partygoer",
    экстремал: "extremal",
    романтик: "romantic",
    весельчак: "soul",
    домосед: "homebody"
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
    const val = level * step;
    let mainButtonRotation = {
        rotate: spring(val, { stiffness: 250, damping: 20 })
    };
    const group = book.gender === "male" ? male : female;
    const groupE = book.gender === "male" ? maleE : femaleE;
    const gender = book.gender === "male" ? "gendermale":"genderfemale"
    const which = invert(group)[step % 7];
    const toSend = groupE[which]
    return (
        <div className="flex flex-column width-full flex-center relative">

            <Text>
                Как вы думаете кто из следующих персонажей, {book.name}?
            </Text>
            <div
                className="flex flex-center"
                style={{ marginBottom: 20, marginTop: 20 }}
            >

                <div onClick={turnLeft} style={{zIndex:1000, margin: 10, marginRight: 20 }}>
                    left
                </div>
                <Motion style={mainButtonRotation}>
                    {({ rotate }) => (
                        <img
                            onClick={e => {
                                e.preventDefault();
                            }}
                            styleName="r"
                            style={{
                                borderRadius: "50%",
                                width: "70%",
                                transform: `rotate(${rotate}deg)`
                            }}
                            src={
                                "http://localhost:4000" +
                                    page.primary_image.image.url
                            }
                        />
                    )}
                </Motion>

                <div onClick={turnRight} style={{zIndex:1000, margin: 10,marginLeft:20 }}>right</div>

            </div>
            <div>{invert(group)[step % 7]}</div>

            <Buttons
                onSave={() => actions.updatePage(page, {text:toSend, gender})}
                close={actions.closeModal}
            />

        </div>
    );
};
