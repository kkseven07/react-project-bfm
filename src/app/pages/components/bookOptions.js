import React from "react";
import Option from "./option";
import "./bookOptions.css";
import hard from "./hard.jpg";
import soft from "./soft.jpg";
import url from "../../../entry/url";
import { Button } from "../../shared";
let prices = {
    digital: 2900,
    soft19: 9900,
    soft23: 11900,
    hard19: 14900,
    hard23: 16900,
    deluxe: 39900,
    fumoney: 99000
};
let sizes = {
    digital: "standard",
    soft19: 19,
    soft23: 23,
    hard19: 19,
    hard23: 23,
    deluxe: 23,
    fumoney: 23
};
let images = {
    digital: `${url}/images/digital.jpg`,
    soft19: `${url}/images/price-small.jpg`,
    soft23: `${url}/images/price-big.jpg`,
    hard19: `${url}/images/price-small-hard.jpg`,
    hard23: `${url}/images/price-big-hard.jpg`,
    deluxe: `${url}/images/product3.jpg`,
    fumoney: `${url}/images/product3.jpg`,
};

const data = [
    {
        type: "digital",
        label: "Цифровая версия книги",
        price: "2900 тг"
    },
    {
        type: "soft",
        label: "Книга в мягком переплете",
        price: "9900 тг"
    },
    {
        type: "hard",
        label: "Книга в твердом переплете",
        price: "14900 тг"
    }
];

class Options extends React.Component {
    for_text = () => {
        if (this.props.book.format === "digital") {
            return "Если у вас дома есть айпад или другой интернет-планшет, с которого вы сможете показывать книгу своим друзьям и родным, то эта цифровая pdf-версия идеально вам подойдет.";
        } else if (this.props.book.format.indexOf("soft") > -1) {
            return "Современная, удобная и привлекательная, она будет для вас отличной спутницей в путешествии. Если вы ведете активный образ жизни и находитесь в постоянных разъездах - выбирайте ее, и не прогадаете!";
        } else {
            return "Аккуратная, солидная и надежная, она способна на протяжении многих лет украшать своим видом вашу книжную полку. Ей не страшны никакие невзгоды, ее страницы защищены практически от любых воздействий и повреждений.";
        }
    };

    render() {
        if (!this.props.book) {
            return null;
        }
        return (
            <div
                style={{ marginTop: 40 }}
                className="width-full flex flex-column flex-center"
            >
                <div
                    style={{
                        height: 1,
                        backgroundColor: "rgb(230,230,230)",
                        width: "70%"
                    }}
                />
                <div
                    style={{
                        fontFamily: "RobotoMedium",
                        fontSize: 25,
                        marginTop: 30
                    }}
                >
                    ФОРМАТ КНИГИ
                </div>
                <div
                    styleName="container"
                    className="flex flex-center width-full flex-wrap"
                >
                    <div styleName="elem image" className="flex flex-center">
                        <img
                            src={images[this.props.book.format]}
                            style={{ width: 315, height: 315 }}
                        />

                    </div>
                    <div styleName="elem option" className="flex flex-column">
                        <div className="flex" styleName="size">
                            <div
                                className="flex flex-center space-between"
                                style={{
                                    height: 40,
                                    margin: 5,
                                    marginTop: 0,
                                    width: 320,
                                    padding: 7,
                                    fontFamily: "RobotoRegular",
                                    fontSize: 18,
                                    background: "rgba(78, 162, 249, 0.22)"
                                }}
                            >
                                ЦЕНА
                                <div
                                    style={{
                                        fontFamily: "RobotoMedium",
                                        color: "black"
                                    }}
                                >
                                    {prices[this.props.book.format]} тг
                                </div>
                            </div>
                        </div>
                        <Option
                            value="digital"
                            enter={this.props.actions.bookVersion}
                            book={this.props.book}
                            name="format"
                            text="Цифровая версия книги"
                        />
                        <Option
                            value="soft"
                            enter={this.props.actions.bookVersion}
                            book={this.props.book}
                            name="format"
                            text="Книга в мягком переплете"
                        />
                        <Option
                            value="hard"
                            enter={this.props.actions.bookVersion}
                            book={this.props.book}
                            name="format"
                            text="Книга в твердом переплете"
                        />
                        <div
                            className="flex flex-center"
                            styleName="size"
                            style={{
                                display: this.props.book.format !== "digital"
                                    ? "flex"
                                    : "none",
                                fontFamily: "RobotoRegular",
                                fontSize: 22,
                                marginTop: 5,
                                marginLeft: 8
                            }}
                        >
                            Размер

                        </div>
                        <div
                            className="flex flex-column"
                            style={{
                                fontSize: 16,
                                marginTop: 5,
                                display: this.props.book.format !== "digital"
                                    ? "flex"
                                    : "none"
                            }}
                        >
                            <Option
                                value="19"
                                enter={this.props.actions.bookVersion}
                                book={this.props.book}
                                name="size"
                                text="19 см на 19 см"
                            />
                            <Option
                                value="23"
                                enter={this.props.actions.bookVersion}
                                book={this.props.book}
                                name="size"
                                text="23 см на 23 см"
                            />

                        </div>
                        <div
                            styleName="size"
                            style={{
                                fontFamily: "RobotoRegular",
                                fontSize: 16,
                                marginTop: 6,
                                lineHeight: 1.4,
                                marginLeft: 8
                            }}
                        >
                            {this.for_text()}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: this.props.book.format !== "digital"
                            ? "flex"
                            : "none"
                    }}
                    className="flex flex-center flex-column"
                >
                    <div
                        style={{
                            fontFamily: "RobotoMedium",
                            fontSize: 25,
                            marginTop: 4
                        }}
                    >
                        ПОДАРОЧНАЯ УПАКОВКА
                    </div>
                    <div
                        styleName="container"
                        className="flex flex-center width-full flex-wrap"
                    >
                        <div styleName="elem image" className="flex">
                            <img
                                src={soft}
                                style={{ width: 315, height: 315 }}
                            />

                        </div>
                        <div
                            style={{ height: 320 }}
                            styleName="elem option"
                            className="flex flex-column"
                        >
                            <div className="flex" styleName="size">
                                <div
                                    className="flex flex-center space-between"
                                    style={{
                                        height: 40,
                                        margin: 5,
                                        marginTop: 0,
                                        width: 320,
                                        padding: 7,
                                        fontFamily: "RobotoRegular",
                                        fontSize: 18,
                                        background: "rgba(78, 162, 249, 0.22)"
                                    }}
                                >
                                    ЦЕНА
                                    <div
                                        style={{
                                            fontFamily: "RobotoMedium",
                                            color: "black"
                                        }}
                                    >
                                        1000 тг
                                    </div>
                                </div>
                            </div>
                            <Option
                                value="wrap"
                                enter={this.props.actions.bookVersion}
                                book={this.props.book}
                                name="wrap"
                                text="Подарочная упаковка"
                            />
                            <div
                                styleName="size"
                                style={{
                                    fontFamily: "RobotoRegular",
                                    fontSize: 16,
                                    marginTop: 10,
                                    marginLeft: 8,
                                    lineHeight: 1.4
                                }}
                            >
                                Подарочная упаковка - Яркая и красочная фирменная упаковка от
                                {" "}
                                <span style={{ fontFamily: "RobotoMedium" }}>
                                    bookfrom.me
                                </span>
                                {" "}
                                сделает ваш подарок еще более удивительным! Конечно, сначала
                                {" "}
                                {this.props.book.name}
                                {" "}
                                увидит сверток и подумает, что Вы дарите
                                {" "}
                                {this.props.book.gender === "male"
                                    ? "ему"
                                    : "ей"}
                                {" "}
                                обычную книгу. Но только представьте, в какой восторг
                                {" "}
                                {this.props.book.gender === "male"
                                    ? "он"
                                    : "она"}
                                {" "}
                                придет, когда раскроет его!
                            </div>

                        </div>
                    </div>
                </div>

                <Button
                    click={() => {
                        this.props.actions.bookFormat(this.props.book)
                        this.props.history.push("/cart");
                    }}
                >
                    Добавить в корзину
                </Button>

            </div>
        );
    }
}
export default Options;
