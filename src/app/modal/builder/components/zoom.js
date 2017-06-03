import React from "react";
import Buttons from "./buttons";
import { connect } from "react-redux";
import Scoop from "./../../../pages/page/scoop";
import Cover from "./../../../pages/page/cover";
import EpicStory from "./../../../pages/page/epicStory";
import Scene from "./../../../pages/page/scene";
import CoverChooser from "./../../../pages/page/coverChooser";
import Intro from "./../../../pages/page/intro";
import FruitDNA from "./../../../pages/page/fruitDNA";
import BackToHistory from "./../../../pages/page/backToHistory";
import Vice from "./../../../pages/page/vice";
import Bestseller from "./../../../pages/page/bestseller";
import Toy from "./../../../pages/page/toy";
import VideoGame from "./../../../pages/page/videoGame";
import Animal from "./../../../pages/page/animal";
import Car from "./../../../pages/page/car";
import MusicHit from "./../../../pages/page/musicHit";
import Sport from "./../../../pages/page/sport";
import Leader from "./../../../pages/page/leader";
import Factoid from "./../../../pages/page/factoid";
import Cell from "./../../../pages/page/cell";
import MirrorDate from "./../../../pages/page/mirrorDate";
import FamousBirthShare from "./../../../pages/page/famousBirthShare";
import DeducedAgeFact from "./../../../pages/page/deducedAgeFact";
import AgeFact from "./../../../pages/page/ageFact";
import TechState from "./../../../pages/page/techState";
import Virtue from "./../../../pages/page/virtue";
import Film from "./../../../pages/page/film";
import Holiday from "./../../../pages/page/holiday";
import Brain from "./../../../pages/page/brain"
const getPage = (type, page, book, props) => {

        if (type === "scoop") {
            return <Scoop book={book} data={page.data}  />;
        } else if (type === "cover") {
            return <Cover book={book} />;
        } else if (type === "animal") {
            return <Animal page={page} book={book} />;
        } else if (type === "intro") {
            return <Intro page={page} book={book} />;
        } else if (type === "musicHit") {
            return <MusicHit book={book} page={page} />;
        } else if (type === "epicStory") {
            return <EpicStory book={book} page={page}/>;
        } else if (type === "scene") {
            return <Scene book={book} />;
        } else if (type === "fruitDNA") {
            return <FruitDNA page={page} book={book} />;
        } else if (type === "factoid") {
            return <Factoid book={book} />;
        } else if (type === "cell") {
            return <Cell book={book} />;
        } else if (type === "vice") {
            return <Vice book={book} page={page} />;
        } else if (type === "virtue") {
            return <Virtue book={book} page={page} />;
        } else if (type === "deducedAgeFact") {
            return <DeducedAgeFact book={book} page={page} osName={props.osName} />;
        } else if (type === "bestseller") {
            return <Bestseller page={page} book={book} />;
        } else if (type === "toy") {
            return <Toy page={page} book={book} osName={props.osName}/>;
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
            return <Film page={page} book={book} osName={props.osName}/>;
        } else if (type === "holiday") {
            return <Holiday page={page} book={book} />;
        } else if (type === "brain") {
            return <Brain page={page} book={book} />;
        } else {
            return <div />;
        }
    };
const Zoom = ({ page, book, actions, ...props }) => {

    return (
        <div
            className="full"
            style={{background:`url(${"http://localhost:4000"+page.primary_image.image.url.replace("768", "1024")})`,
                    backgroundSize:'cover'}}
            >
            {getPage(page.type, page, book, props)}
        </div>
    );
};
const mapStateToProps = state => ({
    osName:state.osName
});
export default connect(mapStateToProps)(Zoom);
