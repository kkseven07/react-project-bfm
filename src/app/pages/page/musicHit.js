import React from "react";
import "./musicHit.css";
import { checkLength } from "../../shared/utils.js";

export default ({ page, book }) => (
    <div className="full flex-center" styleName="r">
        <div className="absolute" styleName="artist">{page.data.single.artist}</div>
        <div
            className="absolute"
            styleName="single"
            style={{ fontSize: checkLength(page.data.single.song, 31, 1) }}
        >
            {page.data.single.song.substring(1, page.data.single.song.length - 2)}
        </div>
    </div>
);
