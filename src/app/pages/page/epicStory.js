import React, {Component} from 'react'
import './epicStory.css'
import {monthsMapYa} from '../../shared/utils.js'
import invert from 'lodash/invert'

const getDate = (date,map) =>{
    let dateTemp = new Date(date)
    dateTemp.toISOString()
    return dateTemp.getUTCDate()+" "+map[dateTemp.getUTCMonth()].toLowerCase()+" " + dateTemp.getUTCFullYear()
}

class Page extends Component{

    render(){
        let word=this.props.book.gender==="male"?"родился ":"родилась "
        let date = getDate(this.props.book.dob,invert(monthsMapYa))
        return (
        <div className="flex full" styleName="r">
            <div className="flex flex-center" styleName="text" >
                {"И как результат,"+ "\n "+ date+ " года "+word + this.props.book.name}
            </div>
        </div>
        );
    }
}

export default Page;


