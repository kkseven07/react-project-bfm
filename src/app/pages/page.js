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
const noImage = ["cover", "coverChooser"];
import { editable } from "../shared/utils.js";

class Page extends Component {
    state = { zoom: false, imgLoaded: this.props.print ? true : false };

    getPage = (type, image, page, book) => {
        if (type === "scoop") {
            return <Scoop book={book} data={page.data} />;
        }
        else if (type === "framefridge") {
            return <FrameFridge url={this.props.url} book={book} page={page} />;
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

            return <PastPhoto url={this.props.url} page={page} book={book} />;
        } else if (type === "relaxPhoto") {

            return <RelaxPhoto url={this.props.url} page={page} book={book} />;
        } else {
            return <div />;
        }
    };

    isEditable = type => editable.indexOf(type) > -1;

    edit = () => this.props.actions.openModal(this.props.page, this.props.book);

    imageUrl = (print, zoom, primary_image) => {
        if (print) {
            console.log(primary_image.image.url)
            return `url(${this.props.url + primary_image.image.url
                    .replace("/web/", "/print/")
                    .replace("_bbx24s", "_2048")})`;
        } else if (zoom) {
            return `url(${this.props.url + primary_image.image.url})`;
        } else {
            return `url(${this.props.url + primary_image.image.url.replace("bbx24s", "mmy70f")})`;
        }
    };

    smallImage = () => {
        return `url(${this.props.url + this.props.page.primary_image.image.url.replace("bbx24s", "mmy70f")})`;
    };

    urlForLoading = (print, primary_image) => {
        if (print) {
            return (
                this.props.url +
                primary_image.image.url
                    .replace("/web/", "/print/")
                    .replace("_768", "_2048")
            );
        }
        return this.props.url + primary_image.image.url.replace("bbx24s", "mmy70f");
    };
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.page.primary_image.image.url !==
            this.props.page.primary_image.image.url
        )
            this.setState({ imgLoaded: false });
    }

    render() {
        const { type, primary_image, data } = this.props.page;
        let image, smallImage, url;
        if (primary_image.image.url) {
            image = {
                backgroundImage: this.imageUrl(
                    this.props.print,
                    this.props.zoom,
                    primary_image
                )
                // backgroundSize:"cover"
            };
            smallImage = {
                backgroundImage: this.smallImage(),
                filter: "blur(15px)"
            };
            url = this.urlForLoading(this.props.print, primary_image);
        }
        // //("page rerender ", this.state.imgLoaded,this.props.page.type)
        //
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
                {!this.props.print &&
                    <img
                        src={url}
                        onLoad={() =>
                            setTimeout(
                                () => this.setState({ imgLoaded: true }),
                                200
                            )}
                        onError={() =>
                            console.log(
                                "error happend in ",
                                this.props.page.type
                            )}
                        style={{
                            display: "none"
                        }}
                    />}

                {this.getPage(type, image, this.props.page, this.props.book)}

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
