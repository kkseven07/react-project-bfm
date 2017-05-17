import React, { Component } from "react";
import FlipPage from "./flip";
const style = {
    flipboard: {
        margin: "30px auto"
    }
};
import white from "./img/white.jpg";
import cover from "./img/cover.jpg";
import simpson from "./img/simpson.png";
import sparkie from "./img/sparky.png";
import bird from "./img/bird.png";
import lumpy from "./img/lumpy.png";

const array = [
    [white, cover],
    [simpson, lumpy],
    [bird, sparkie],
    [cover, white]
];
class Custom extends Component {
    generateColor() {
        let symbols = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += symbols[Math.floor(Math.random() * 15)];
        }
        return color;
    }
    render() {
        let data = array.map((pages, n) => {
            let new_pages = pages.map((page, i) => {
                return (
                    <img
                        src={page}
                        style={{
                            width: 400,
                            height: 400,
                            boxShadow: "-10px 0 40px rgba(0,0,0,0.5)"
                        }}
                        alt="example"
                        key={i}
                    />
                );
            });

            return (
                <div style={{ display: "flex" }} key={n}>
                    {new_pages}
                </div>
            );
        });
        return (
            <FlipPage
                height={400}
                width={800}
                showHint={true}
                uncutPages={true}
                orientation="horizontal"
                style={style.flipboard}
            >
                {data}
            </FlipPage>
        );
    }
}

export default Custom;
