
import React, {Component} from 'react'
import "./intro.css"

class Intro extends Component{
    setStyle=(image_url)=> {
        if (image_url.match('v1')) return  ['name-v1','sender-v1']
        else if (image_url.match('v2')) return  ['name-v2','sender-v2']
        else if (image_url.match('v4')) return  ['name-v4','sender-v4']
        else return ['no-image','no-image'];
        
    } 

    render(){
        // this.props.page.images[0]="http://46.101.217.205:4000/media/for_web/intro/intro_v3_768.jpg"
        // this.props.page.images[1]="http://46.101.217.205:4000/media/for_web/intro/intro_v2_768.jpg"
        const {image} = this.props.page.primary_image
        const uniqs = this.setStyle(image.url)
        const name_uniq = uniqs[0]
        const sender_uniq = uniqs[1]
        return (
        
        <div className="full" styleName="r"
            style={{}}>
            <div styleName={"name positioned " + name_uniq}>
                {this.props.book.name.toUpperCase()}
            </div>
            <div styleName={"sender positioned " + sender_uniq}>
                {"C пожеланиями, \n"+this.props.book.sender_name}
            </div>
        </div>
        );

    }
}

export default Intro;


