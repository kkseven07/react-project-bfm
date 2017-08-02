import React from "react";
import "./musicHit.css";
import { checkLength } from "../../shared/utils.js";
const setStyle = image_url => {
        if (image_url.match("v1")) return ["artist-v1", "single-v1",20, 1.7,20, 1.7];
        else if (image_url.match("v2")) return ["artist-v2", "single-v2",8, 2.8, 28, 2.1];
        else return ["artist-v3", "single-v3", 40, 1, 40, 1];
    };
const dropSong =(s)=>{
    let index =0;
    if (s.match("/") ) {
        index = s.indexOf("/");
        s=s.substring(0,index);
        //("s",s)
    }
    return s;
}

export default ({ page, book, ...props }) => {

    // page.data.single.artist= page.data.single.artist.replace(/при участии/gi, "ft.")
     let uniqStyle = setStyle(page.primary_image.image.url);
    return <div className="full" styleName="r" style={{width:props.print&&'98%', height:props.print&&'95%'}}>
        <div className="absolute" styleName={uniqStyle[0]}
            style={{
                fontSize:checkLength(dropSong(page.data.single.artist&&page.data.single.artist), uniqStyle[2], uniqStyle[3]),
                bottom:uniqStyle[0]==='artist-v3'&&props.print&&'23%'
            }}
        >{dropSong(page.data.single.artist&&page.data.single.artist)}
        </div>
        <div
            className="absolute"
            styleName={uniqStyle[1]}
            style={{
                fontSize:checkLength(dropSong(page.data.single.song&&page.data.single.song), uniqStyle[4], uniqStyle[5]),
                bottom:uniqStyle[0]==='artist-v3'&&props.print&&'18%'
            }}
        >
            {dropSong(page.data.single.song&&page.data.single.song.replace('»', '').replace('«', ''))}
        </div>
    </div>
}
