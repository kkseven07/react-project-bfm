import React from "react";
import { Background } from "../../shared";
import "./builder.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
import Info from './info'
import Intro from "./components/intro";
import Brain from "./components/brain";
import CoolPlace from "./components/coolPlace";
import FruitDNA from "./components/fruitDNA";
import FrameFridge from "./components/frameFridge"
import QualityTable from "./components/qualityTable";
import EasternWiseWord from "./components/easternWiseWord";
import WesternWiseWord from "./components/westernWiseWord";
import Virtue from "./components/virtue";
import Vice from "./components/vice";
import WiseWord from "./components/wiseWord";
import EpicStory from "./components/epicStory";
import MusicHit from "./components/musicHit";
import Zoom from "./components/zoom";
const getComponent = (page, book, actions, form, step) => {
    switch (page.type) {
        case "info":
            return <Info book={book} actions={actions} />;
        case "intro":
            return (
                <Intro page={page} book={book} actions={actions} form={form} />
            );
        case "brain":
            return (
                <Brain page={page} book={book} actions={actions} form={form} />
            );
        case "coolPlace":
            return (
                <CoolPlace
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "fruitDNA":
            return (
                <FruitDNA
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "qualityTable":
            return (
                <QualityTable
                    step={step}
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "easternWiseWord":
            return (
                <EasternWiseWord
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "westernWiseWord":
            return (
                <WesternWiseWord
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "wiseWord":
            return (
                <WiseWord
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "vice":
            return (
                <Vice page={page} book={book} actions={actions} form={form} />
            );
        case "virtue":
            return (
                <Virtue page={page} book={book} actions={actions} form={form} />
            );
        case "framefridge":
            return <FrameFridge page={page} book={book} actions={actions} form={form} />
        case "epicStory":
            return (
                <EpicStory
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "musicHit":
            return (
                <MusicHit
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        default:
            return null;
    }
};
const getZoomComponent = (page, book, actions) => {
    return <Zoom page={page} book={book} actions={actions} />;
};
const stopClick = e => {
    e.stopPropagation();
};
const Modal = ({ isOpen, page, book, actions, builder, params }) => {
    if (!isOpen) {
        return null;
    }
    //(params)
    return (
        <Background close={actions.closeModal} zIndex={"20"} isOpen={isOpen}>
            <div
                onClick={stopClick}
                styleName={!params.zoom ? "r" : "zoom"}
            >
                {!params.zoom
                    ? getComponent(
                          page,
                          book,
                          actions,
                          builder[page.type],
                          builder.qualityTableStep
                      )
                    : getZoomComponent(page, book, actions)}
            </div>
        </Background>
    );
};

const mapStateToProps = state => ({
    isOpen: state.modal.isOpen,
    page: state.modal.page,
    book: state.modal.book,
    builder: state.builder,
    params: state.modal.params
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);