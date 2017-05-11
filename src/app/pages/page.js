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
import Cell from "./page/cell";
import MirrorDate from "./page/mirrorDate";
import FamousBirthShare from "./page/famousBirthShare";
import DeducedAgeFact from "./page/deducedAgeFact";
import AgeFact from "./page/ageFact";
import TechState from "./page/techState";
import Virtue from "./page/virtue";
import Film from "./page/film";
import Holiday from "./page/holiday";
const urlImage = "http://localhost:4000/images/";
const noImage = ["cover", "coverChooser"];
import { editable } from "../shared/utils.js";

// .replace("http://localhost:4000","http://46.101.217.205:4000")
class Page extends Component {
    state = { zoom: false };

    getPage = (type, image, page, book) => {
        if (type === "scoop") {
            return <Scoop book={book} data={page.data} />;
        } else if (type === "colorChooser") {
            return <CoverChooser />;
        } else if (type === "cover") {
            return <Cover book={book} />;
        } else if (type === "animal") {
            return <Animal page={page} book={book} />;
        } else if (type === "intro") {
            return <Intro page={page} book={book} />;
        } else if (type === "musicHit") {
            return <MusicHit book={book} page={page} />;
        } else if (type === "epicStory") {
            return <EpicStory book={book} />;
        } else if (type === "scene") {
            return <Scene book={book} />;
        } else if (type === "fruitDNA") {
            return <FruitDNA page={page} book={book} />;
        } else if (type === "factoid") {
            return <Factoid book={book} />;
        } else if (type === "cell") {
            return <Cell book={book} />;
        } else if (type === "vice") {
            return <Vice book={book} />;
        } else if (type === "virtue") {
            return <Virtue book={book} />;
        } else if (type === "deducedAgeFact") {
            return <DeducedAgeFact book={book} page={page} />;
        } else if (type === "bestseller") {
            return <Bestseller page={page} book={book} />;
        } else if (type === "toy") {
            return <Toy page={page} book={book} />;
        } else if (type === "videoGame") {
            return <VideoGame page={page} book={book} />;
        } else if (type === "backToHistory") {
            return <BackToHistory page={page} book={book} />;
        } else if (type === "car") {
            return <Car page={page} />;
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
            return <Film page={page} book={book} />;
        } else if (type === "holiday") {
            return <Holiday page={page} book={book} />;
        } else {
            return (
                <div>
                    <span>{type}</span>
                </div>
            );
        }
    };

    isEditable = type => editable.indexOf(type) > -1;

    edit = () => this.props.actions.openModal(this.props.page, this.props.book);

    render() {
        const { type, primary_image, data } = this.props.page;
        let image = null;
        let imagesrc = null, imagesrclow = null;
        if (type !== "colorChooser" && primary_image.image.url) {
            image = {
                backgroundImage: `url(${"http://localhost:4000" + primary_image.image.url})`
            };
            imagesrc = `${primary_image.image.url.replace("http://localhost:4000", "http://46.101.217.205:4000")}`;
            imagesrclow = `${primary_image.image.url
                .replace("http://localhost:4000", "http://46.101.217.205:4000")
                .replace("768", "320")}`;
        }
        return (
            // <img src={imagesrc} height="508" width="508" style={{position:"absolute"}} styleName="bg-image"/>
            (
                <div
                    // onContextMenu={()=>false}
                    onClick={e => {
                        e.preventDefault();
                        // if(type!=="colorChooser") this.setState({zoom:!this.state.zoom})
                    }}
                    styleName={this.state.zoom ? "page clicked" : "page"}
                    style={image}
                >

                    {this.getPage(
                        type,
                        image,
                        this.props.page,
                        this.props.book
                    )}

                    {this.isEditable(type) &&
                        <button
                            onClick={this.edit}
                            styleName="edit-button"
                            className="flex-center"
                        >
                            <span styleName="edit-text" className="jura">
                                Редактировать
                            </span>
                        </button>}
                </div>
            )
        );
    }
}

export default Page;
