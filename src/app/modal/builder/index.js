import React from "react";
import { Background } from "../../shared";
import "./builder.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";

import Intro from "./components/intro";
import Brain from "./components/brain";
import CoolPlace from "./components/coolPlace";
import FruitDNA from "./components/fruitDNA";
import QualityTable from "./components/qualityTable";
import EasternWiseWord from "./components/easternWiseWord";
import WesternWiseWord from "./components/westernWiseWord";
import Virtue from "./components/virtue";
import Vice from "./components/vice";
import WiseWord from "./components/wiseWord";

const getComponent = (page, book, actions) => {
    switch (page.type) {
        case "intro":
            return <Intro page={page} book={book} actions={actions} />;
        case "brain":
            return <Brain page={page} book={book} actions={actions} />;
        case "coolPlace":
            return <CoolPlace page={page} book={book} actions={actions} />;
        case "fruitDNA":
            return <FruitDNA page={page} book={book} actions={actions} />;
        case "qualityTable":
            return <QualityTable page={page} book={book} actions={actions} />;
        case "easternWiseWord":
            return (
                <EasternWiseWord page={page} book={book} actions={actions} />
            );
        case "westernWiseWord":
            return (
                <WesternWiseWord page={page} book={book} actions={actions} />
            );
        case "wiseWord":
            return <WiseWord page={page} book={book} actions={actions} />;
        case "vice":
            return <Vice page={page} book={book} actions={actions} />;
        case "virtue":
            return <Virtue page={page} book={book} actions={actions} />;

        default:
            return null;
    }
};
const stopClick = e => {
    e.stopPropagation();
};
const Modal = ({ isOpen, page, book, actions }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Background close={actions.closeModal} zIndex={"20"} isOpen={isOpen}>
            <div onClick={stopClick} className="flex" styleName="r">
                {getComponent(page, book, actions)}
            </div>
        </Background>
    );
};

const mapStateToProps = state => ({
    isOpen: state.modal.isOpen,
    page: state.modal.page,
    book: state.modal.book
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
