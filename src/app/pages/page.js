import React, { Component } from "react";
import "./pages.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../business/actions/index.js";
import Scoop from "./page/scoop";
import Cover from "./page/cover";
import EpicStory from "./page/epicStory";
import Scene from "./page/scene";
import CoverChooser from "./page/coverChooser";
import Intro from "./page/intro";
import WiseWord from "./page/wiseWord";
import FruitDNA from "./page/fruitDNA";
import BackToHistory from "./page/backToHistory";
import Vice from "./page/vice";
import Bestseller from "./page/bestseller";
import Toy from "./page/toy";
import VideoGame from "./page/videoGame";
import Animal from "./page/animal";
import Car from "./page/car";
import MusicHit from "./page/musicHit";
import Sport from "./page/sport";
import Leader from "./page/leader";
import Factoid from "./page/factoid";
import FrameFridge from "./page/framefridge";
import Cell from "./page/cell";
import MirrorDate from "./page/mirrorDate";
import FamousBirthShare from "./page/famousBirthShare";
import DeducedAgeFact from "./page/deducedAgeFact";
import AgeFact from "./page/ageFact";
import TechState from "./page/techState";
import Virtue from "./page/virtue";
import Film from "./page/film";
import Holiday from "./page/holiday";
import Brain from "./page/brain";
import Quotes from "./page/quotes";
import PastPhoto from "./page/pastPhoto";
import RelaxPhoto from "./page/relaxPhoto";
import MomChemistryProoved from "./page/momChemistryProoved";
import FormulaMom from "./page/formulaMom";
import GeniusQuoteMom from "./page/geniusQuoteMom";
import PrideOfMom from "./page/prideOfMom";
import CredoMom from "./page/credoMom";
import ThanksForMom from "./page/thanksForMom";
import DadChemistryProoved from "./page/dadChemistryProoved";
import FormulaDad from "./page/formulaDad";
import GeniusQuoteDad from "./page/geniusQuoteDad";
import PrideOfDad from "./page/prideOfDad";
import CredoDad from "./page/credoDad";
import ThanksForDad from "./page/thanksForDad";
import FrontPage from "./page/frontPage";
import FrontPageBack from "./page/frontPageBack";

const noImage = ["cover", "coverChooser"];
import { editable } from "../shared/utils.js";

class Page extends Component {
    state = {
        zoom: false,
        imgLoaded: this.props.print || this.props.zoom ? true : false
    };

    getPage = (type, image, page, book,print) => {
        if (type === "scoop") {
            return <Scoop book={book} data={page.data} />;
        } else if (type === "framefridge") {
            return <FrameFridge print={print} url={this.props.url} book={book} page={page} />;
        } else if (type === "brain") {
            return <Brain book={book} page={page} />;
        } else if (type === "cover") {
            return <Cover book={book} page={page} />;
        } else if (type === "animal") {
            return <Animal page={page} book={book} />;
        } else if (type === "intro") {
            return <Intro page={page} book={book} />;
        } else if (type === "musicHit") {
            return <MusicHit book={book} page={page} />;
        } else if (type === "epicStory") {
            return <EpicStory page={page} book={book} />;
        } else if (type === "scene") {
            return <Scene book={book} />;
        } else if (type === "fruitDNA") {
            return (
                <FruitDNA page={page} book={book} osName={this.props.osName} />
            );
        } else if (type === "factoid") {
            return <Factoid book={book} />;
        } else if (type === "cell") {
            //

            return <Cell book={book} />;
        } else if (type === "vice") {
            return <Vice book={book} page={page} />;
        } else if (type === "virtue") {
            return <Virtue book={book} page={page} />;
        } else if (type === "deducedAgeFact") {
            return (
                <DeducedAgeFact
                    book={book}
                    page={page}
                    osName={this.props.osName}
                />
            );
        } else if (type === "bestseller") {
            return <Bestseller page={page} book={book} />;
        } else if (type === "toy") {
            return <Toy page={page} book={book} osName={this.props.osName} />;
        } else if (type === "videoGame") {
            return <VideoGame page={page} book={book} />;
        } else if (type === "backToHistory") {
            return <BackToHistory page={page} book={book} />;
        } else if (type === "car") {
            return <Car page={page} book={book} />;
        } else if (type === "sport") {
            return <Sport page={page} />;
        } else if (type === "leaders") {
            return <Leader page={page} />;
        } else if (type === "mirrorDate") {
            return <MirrorDate book={book} />;
        } else if (type === "famousBirthShare") {
            return <FamousBirthShare page={page} book={book} />;
        } else if (type === "techState") {
            return <TechState page={page} />;
        } else if (type === "ageFact") {
            return <AgeFact page={page} book={book} />;
        } else if (type === "film") {
            return <Film page={page} book={book} osName={this.props.osName} />;
        } else if (type === "holiday") {
            return <Holiday page={page} book={book} />;
        } else if (type === "wiseWord") {
            return <WiseWord page={page} book={book} />;
        } else if (type === "quotes") {
            return <Quotes page={page} book={book} />;
        } else if (type === "pastPhoto") {
            return <PastPhoto print={print} url={this.props.url} page={page} book={book} />;
        } else if (type === "relaxPhoto") {
            return <RelaxPhoto print={print} url={this.props.url} page={page} book={book} />;
        } else if (type === "momChemistryProoved") {
            return <MomChemistryProoved page={page} book={book} />;
        } else if (type === "formulaMom") {
            return <FormulaMom page={page} book={book} />;
        } else if (type === "geniusQuoteMom") {
            return <GeniusQuoteMom page={page} book={book} />;
        } else if (type === "prideOfMom") {
            return <PrideOfMom page={page} book={book} />;
        } else if (type === "credoMom") {
            return <CredoMom page={page} book={book} />;
        } else if (type === "thanksForMom") {
            return <ThanksForMom page={page} book={book} />;
        } else if (type === "dadChemistryProoved") {
            return <DadChemistryProoved page={page} book={book} />;
        } else if (type === "formulaDad") {
            return <FormulaDad page={page} book={book} />;
        } else if (type === "geniusQuoteDad") {
            return <GeniusQuoteDad page={page} book={book} />;
        } else if (type === "prideOfDad") {
            return <PrideOfDad page={page} book={book} />;
        } else if (type === "credoDad") {
            return <CredoDad page={page} book={book} />;
        } else if (type === "thanksForDad") {
            return <ThanksForDad page={page} book={book} />;
        } else if (type === "frontPage" || type === "endPage") {
            return <FrontPage page={page} book={book} />;
        } else if (type === "frontPageBack") {
            return <FrontPageBack page={page} book={book} />;
        } else {
            return <div />;
        }
    };

    isEditable = type => editable.indexOf(type) > -1;

    edit = () => this.props.actions.openModal(this.props.page, this.props.book);

    imageUrl = (print, zoom, primary_image) => {
        if (print) {
            return `url(${this.props.url + primary_image.image.url
                    .replace("/web/", "/print/")
                    // .replace("print_","")
                    .replace("_bbx24s", "_2048")})`;
        } else if (zoom) {
            return `url(${this.props.url + primary_image.image.url})`;
        } else {
            return `url(${this.props.url + primary_image.image.url})`;
        }
        //.replace("bbx24s", "mmy70f")
    };

    smallImage = (primary_image) => {
        return `url(${this.props.url + primary_image.image.url.replace("bbx24s", "ssx8m")})`;
    };

    urlForLoading = (print, primary_image) => {
        return this.props.url + primary_image.image.url//.replace("bbx24s", "ssx8m");
    };
    componentWillReceiveProps(nextProps) {
        // if(!this.props.primary_image) return;
        if (//this.props.primary_image&&this.props.primary_image.image&&
            nextProps.page.primary_image.image.url !==
            this.props.page.primary_image.image.url
        )
            !(this.props.print || this.props.zoom) &&
                this.setState({ imgLoaded: false });
    }

    render() {
        const { type, primary_image, data } = this.props.page;
        let image, smallImage, loadingurl;
        if (primary_image&&primary_image.image&&primary_image.image.url) {
            // if(type==="qualityTableChoice") console.log(this.state.imgLoaded,"qualityTableChoice")
            image = {
                backgroundImage: this.imageUrl(
                    this.props.print,
                    this.props.zoom,
                    primary_image
                )
                // backgroundSize:"cover"
            };
            smallImage = {
                backgroundImage: this.smallImage(primary_image),
                filter: "blur(15px)"
            };
            loadingurl = this.urlForLoading(this.props.print, primary_image);
        }
        return (
            <div
                onClick={e => {
                    e.preventDefault();
                }}
                styleName={
                    this.props.zoom
                        ? "page zoom"
                        : this.props.print ? "page print" : "page"
                }
                style={this.state.imgLoaded ? image : smallImage}
            >
                <div
                    className="full"
                    style={{ position: "absolute", zIndex: "2" }}
                    onClick={() => {
                        if (this.props.zoom) {
                            this.props.actions.closeModal();
                        } else {
                            this.props.actions.openModal(
                                this.props.page,
                                this.props.book,
                                { zoom: true }
                            );
                        }
                    }}
                />
                {!(this.props.print || this.props.zoom) &&
                    <img
                        src={loadingurl}
                        onLoad={() =>
                            setTimeout(
                                () => this.setState({ imgLoaded: true }),
                                200
                            )}
                        onError={() =>
                             setTimeout(this.setState({ imgLoaded: true }),200)}
                        style={{
                            display: "none"
                        }}
                    />}

                {this.getPage(type, image, this.props.page, this.props.book,this.props.print)}

                {this.isEditable(type) &&
                    !this.props.print &&
                    !this.props.zoom &&
                    <button
                        onClick={this.edit}
                        styleName="edit-button"
                        style={{ zIndex: "3" }}
                    >
                        <div styleName="edit-text">
                            Редактировать
                        </div>
                    </button>}
            </div>
        );
    }
}

export default Page;
