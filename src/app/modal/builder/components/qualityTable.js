import React from "react";
import Text from "./text";
import invert from "lodash/invert";
import Buttons from "./buttons";
import Arrow from '../../../../../assets/icons/arrow.png'
import ArrowChoice from '../../../../../assets/icons/arrowchoice.png'
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
    умница: "smartgirl",
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
            <div style={{width:'8%', height:'8%'}}>
                <img src={ArrowChoice} key="arrowchoice" styleName="arrow-choice"/>
            </div>
            <div
                className="flex flex-center"
                style={{ marginBottom: 20, marginTop: 20 }}
            >

                <div onClick={turnLeft} style={{ margin: 10, marginRight: 20, width:'5%', height:'5%' }}>
                    <img  styleName="arrow arrow-left"src={Arrow} key="arrow"/>
                </div>
                <Motion style={mainButtonRotation}>
                    {({ rotate }) => (
                        <img
                            onClick={e => {
                                e.preventDefault();
                            }}
                            style={{
                                borderRadius: "40%",
                                height: "70%",
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

                <div onClick={turnRight} style={{ margin: 10 , width:'5%', height:'5%'}}>
                    <img styleName="arrow arrow-right" src={Arrow} key="arrow"/>
                </div>

            </div>
            <div style={{marginTop:'1%'}}>{invert(group)[step % 7]}</div>

            <Buttons
                onSave={() => actions.updatePage(page, {text:toSend, gender})}
                close={actions.closeModal}
            />

        </div>
    );
};
