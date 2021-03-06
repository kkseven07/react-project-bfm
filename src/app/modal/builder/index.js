import React from "react";
import { Background } from "../../shared";
import "./builder.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
import Info from "./info";
import Intro from "./components/intro";
import Brain from "./components/brain";
import CoolPlace from "./components/coolPlace";
import FruitDNA from "./components/fruitDNA";
import Framefridge from "./components/frameFridge";
import QualityTable from "./components/qualityTable";
import EasternWiseWord from "./components/easternWiseWord";
import WesternWiseWord from "./components/westernWiseWord";
import Virtue from "./components/virtue";
import Vice from "./components/vice";
import WiseWord from "./components/wiseWord";
import EpicStory from "./components/epicStory";
import MusicHit from "./components/musicHit";
import DeducedAgeFact from "./components/deducedAgeFact";
import Film from "./components/film";
import Zoom from "./components/zoom";
import Quotes from "./components/quotes";
import PastPhoto from "./components/pastPhoto";
import RelaxPhoto from "./components/relaxPhoto";
import MomChemistryProoved from "./components/momChemistryProoved";
import FormulaMom from "./components/formulaMom"
import GeniusQuoteMom from "./components/geniusQuoteMom"
import PrideOfMom from "./components/prideOfMom"
import CredoMom from "./components/credoMom"
import ThanksForMom from "./components/thanksForMom"
import DadChemistryProoved from "./components/dadChemistryProoved";
import FormulaDad from "./components/formulaDad"
import GeniusQuoteDad from "./components/geniusQuoteDad"
import PrideOfDad from "./components/prideOfDad"
import CredoDad from "./components/credoDad"
import ThanksForDad from "./components/thanksForDad"

import { toSave } from "./utils";

const getComponent = (page, book, actions, form, step) => {
    switch (page.type) {
        case "info":
            return <Info book={book} actions={actions} />;
        case "intro":
            return (
                <Intro page={page} book={book} actions={actions} form={form} />
            );
        case "film":
            return (
                <Film page={page} book={book} actions={actions} form={form} />
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
            return (
                <Framefridge
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
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
        case "deducedAgeFact":
            return (
                <DeducedAgeFact
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "quotes":
            return (
                <Quotes
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "pastPhoto":
            return (
                <PastPhoto
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "relaxPhoto":
            return (
                <RelaxPhoto
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "momChemistryProoved":
            return (
                <MomChemistryProoved
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "formulaMom":
            return (
                <FormulaMom
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "geniusQuoteMom":
            return (
                <GeniusQuoteMom
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "prideOfMom":
            return (
                <PrideOfMom
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "credoMom":
            return (
                <CredoMom
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "thanksForMom":
            return (
                <ThanksForMom
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
            //-----DAD
        case "dadChemistryProoved":
            return (
                <DadChemistryProoved
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "formulaDad":
            return (
                <FormulaDad
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "geniusQuoteDad":
            return (
                <GeniusQuoteDad
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "prideOfDad":
            return (
                <PrideOfDad
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "credoDad":
            return (
                <CredoDad
                    page={page}
                    book={book}
                    actions={actions}
                    form={form}
                />
            );
        case "thanksForDad":
            return (
                <ThanksForDad
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
class Modal extends React.Component {
    componentDidUpdate() {
        if (this.props.isOpen) {
            document.body.classList.toggle("HiddenOverflow", true);
        } else {
            document.body.classList.toggle("HiddenOverflow", false);
        }
    }

    // componentDidUpdate(){
    //     // console.log(this.modal)
    //     if(this.props.isOpen) this.modal.addEventListener("keydown", this.handleNvEnter)
    // }
    // componentWillUnmount() {
    // console.log("component did unmlasjdlk----");
    // this.modal.removeEventListener("keydown", this.handleNvEnter);
    // document.body.style.oveflow="initial"
    // }
    // handleNvEnter = event => {
    //     console.log("Nv Enter:", event.key);
    //     if(event.key==="Enter"){
    //         console.log(this.props.builder[this.props.page.type])
    //        this.props.actions.updatePage(this.props.page, toSave(this.props.builder[this.props.page.type]))
    //     }
    // };

    render() {
        const { isOpen, page, book, actions, builder, params } = this.props;
        if (!isOpen) {
            return null;
        }
        return (
            <Background
                close={actions.closeModal}
                zIndex={"20"}
                isOpen={isOpen}
            >
                <div
                    // tabIndex="1"
                    // ref={el => (this.modal = el)}
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
    }
}

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
