import React, { Component } from "react";
import "./intro.css";

class Intro extends Component {
    setStyle = image_url => {
        if (image_url.match("v1")) return ["name-v1", "sender-v1",'wish-text-v1', '1.5'];
        else if (image_url.match("v2")) return ["name-v2", "sender-v2", 'wish-text-v2', '1.7'];
        else if (image_url.match("v3")) return ["name-v3", "sender-v3", 'wish-text-v3', '3.3'];
        else if (image_url.match("v4")) return ["name-v4", "sender-v4", 'wish-text-v4', '1.5'];
        else return ["no-image", "no-image", "no-image"];
    };

    render() {
        const { image } = this.props.page.primary_image;
        const uniqs = this.setStyle(image.url);
        const name_uniq = uniqs[0];
        const sender_uniq = uniqs[1];
        const wishtext_uniq = uniqs[2];
        let fontSize= this.props.book.name.indexOf(" ")>-1?uniqs[3]*0.7:uniqs[3];
        
        return (
            <div className="full" styleName="r" style={{}}>
                <div styleName={"name positioned " + name_uniq} style={{fontSize:`${fontSize}em`}}>
                    {this.props.book.name.toUpperCase()},
                </div>
                <div styleName={wishtext_uniq + " positioned"} >
                    {this.props.page.data.text1?this.props.page.data.text1:"Это просто возмутительно, что о вас до сих пор не было написано книги и, наконец, вот она!"}
                </div>
                <div styleName={"sender positioned " + sender_uniq}>
                    {this.props.page.data.text?this.props.page.data.text:"C пожеланиями, \n" + this.props.book.sender_name}
                </div>
            </div>
        );
    }
}

export default Intro;
