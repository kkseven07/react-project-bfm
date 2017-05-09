import React, {Component} from 'react'
import '../pages.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../business/actions/index.js'
import Scoop from './scoop'
import Cover from './cover'
import EpicStory from './epicStory'
import Scene from './scene'
import CoverChooser from './coverChooser'
import Intro from './intro'
import FruitDNA from './fruitDNA'
import BackToHistory from './backToHistory'
import Vice from './vice'
import Bestseller from './bestseller'
import Toy from './toy'
import VideoGame from './videoGame'
import Animal from './animal'
import Car from './car'
import MusicHit from './musicHit'
import Sport from './sport'
import Leader from './leader'
import Factoid from './factoid'
import Cell from './cell'
import MirrorDate from './mirrorDate'
import FamousBirthShare from './famousBirthShare'
import DeducedAgeFact from './deducedAgeFact'
import AgeFact from './ageFact'
import TechState from './techState'
import Virtue from './virtue'
import Film from './film'
import Holiday from './holiday'
const urlImage = "http://localhost:4000/images/"
const noImage=["cover", "coverChooser"]
import {editable} from '../../shared/utils.js'


// .replace("http://localhost:4000","http://46.101.217.205:4000")
class Page extends Component{
    state={zoom:false}

    getPage=(type,image,page,book)=>{
        if(type === "scoop"){
            return <Scoop book={book} data={page.data}/>
        }
        else if (type === "colorChooser"){
            return <CoverChooser/>
        }
        else if(type === "cover"){
            return <Cover book={book} />
        }
        else if(type === "animal"){
            return <Animal page={page} book={book}/>
        }
        else if(type==="intro"){
            return <Intro page={page} book={book}/>
        }
        else if(type==="musicHit"){
            return <MusicHit book={book} page={page}/>
        }
        else if(type==="epicStory"){
            return <EpicStory book={book}/>
        }
        else if(type==="scene"){
            return <Scene book={book}/>
        }
        else if(type === "fruitDNA"){
            return <FruitDNA page={page} book={book}/>
        }
        else if(type==="factoid"){
            return  <Factoid book={book}/>
        }
        else if(type==="cell"){
            return <Cell book={book}/>
        }
        else if(type==="vice"){
            return <Vice book={book}/>
        }
        else if(type==="virtue"){
            return <Virtue book={book}/>
        }
        else if(type==="deducedAgeFact"){
            return <DeducedAgeFact book={book} page={page}/>
        }
        else if(type === "bestseller"){
            return <Bestseller page={page} book={book}/>
        }
        else if(type === "toy"){
            return <Toy page={page} book={book}/>
        }
        else if(type === "videoGame"){
            return <VideoGame page={page} book={book}/>
        }
        else if(type==="backToHistory"){
            return <BackToHistory page={page} book={book}/>
        }
        else if(type==="car"){
            return <Car page={page}/>
        }
        else if(type==="sports"){
            return <Sport page={page}/>
        }
        else if(type==="leaders"){
            return <Leader page={page}/>
        }
        else if(type==="mirrorDate"){
            return <MirrorDate book={book}/>
        }
        else if(type === "famousBirthShare"){
            return <FamousBirthShare page={page} book={book}/>
        }
        else if(type === "techState"){
            return <TechState page={page}/>
        }
        else if(type==="ageFact"){
            return <AgeFact page={page} book={book}/>
        }
        else if (type==="film") {
            return <Film page={page} book={book} />
        }
        else if (type==="holiday") {
            return <Holiday page={page} book={book}/>
        }
        else{
            return (<div>
                    <span>{type}</span>
                </div>)
        }
    }

    isEditable=(type)=>(editable.indexOf(type)>-1)

    edit=()=>(this.props.actions.rodal(this.props.page, this.props.book))


    render(){
        const {type, primary_image, data} = this.props.page
        let image=null;
        let imagesrc=null, imagesrclow=null;
        if(type!=="colorChooser" && primary_image.image.url){
            image={backgroundImage: `url(${primary_image.image.url.replace("http://localhost:4000","http://46.101.217.205:4000")})`}
            imagesrc = `${primary_image.image.url.replace("http://localhost:4000","http://46.101.217.205:4000")}`
            imagesrclow = `${primary_image.image.url.replace("http://localhost:4000","http://46.101.217.205:4000").replace("768", "320")}`
        }
        return (
            // <img src={imagesrc} height="508" width="508" style={{position:"absolute"}} styleName="bg-image"/>
            <div
            // onContextMenu={()=>false}
            onClick={(e)=>{
                e.preventDefault()
                // if(type!=="colorChooser") this.setState({zoom:!this.state.zoom})
            }}
             styleName={this.state.zoom?"page clicked":"page"}
                style={image}
                >
                
                
                {this.getPage(type, image, this.props.page, this.props.book)}

                {
                    this.isEditable(type)&&<button
                        onClick={this.edit}
                        styleName="edit-button"
                         className="flex-center"
                        >
                        <span styleName="edit-text"
                            className="jura">
                            Редактировать
                        </span>
                    </button>
                }
            </div>
        );
    }
}

export default Page

