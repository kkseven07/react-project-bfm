import React from "react";
import "./book.css";
import { connect } from "react-redux";
import * as actions from "../../business/actions/index.js";
import { bindActionCreators } from "redux";
import hard from "./hard.jpg";
import soft from "./soft.jpg";
import digital from "./soft1.jpg";
import Text from "../modal/builder/components/text";
import { Button, ErrorText } from "../shared";

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
const getImage = version => {
    if (version === "soft") return soft;
    if (version === "digital") return digital;
    if (version === "hard") return hard;
};

const prices={
    digital:"2900 тг",
    soft:"9900 тг",
    hard:"14900 тг"

}
const Book = props => {
    const book = props.book[props.book.currentBookId];
    return (
        <div className="width-full flex flex-center flex-wrap" styleName="r">
            <div className="flex flex-center" styleName="book-form">
                <img
                    src={getImage(props.version.value)}
                    style={{ width: 320, height: 320 }}
                />
            </div>
            <div
                className="flex flex-column"
                styleName="book-form form"
            >
                <div styleName="choose">
                    Выберите один из вариантов
                </div>
                <div
                    className="flex flex-column flex-center"
                    style={{ alignItems: "flex-start", }}
                >
                    {data.map((val, i) => (
                        <div style={{margin:5,marginLeft:0}} key={i} className="flex flex-center">
                            <input
                                styleName="input"
                                type="radio"
                                name="version"
                                checked={val.type === book.order.type}
                                value={val.type}
                                onChange={e => {
                                    props.actions.updateOrder(book.order.id, {
                                        type: e.target.value,
                                        price: prices[e.target.value]
                                    });
                                    props.actions.bookVersion(e.target.value);
                                }}
                            />
                            {val.label}

                        </div>
                    ))}

                    {props.version.value === "" &&
                        !props.version.isPristine &&
                        <ErrorText
                            text={"Выберите один из вариантов формата книги"}
                        />}
                    <div
                        styleName="price"
                        className="flex space-between"
                    >
                        <div>Цена: </div>
                        <div>{data.filter(val=>val.type===props.version.value)[0].price}</div>
                    </div>

                    <div style={{ height: 20, alignSelf: "center" }} />
                    <Button
                        click={() => {
                            props.actions.bookVersion(props.version.value);
                            props.version.value !== "" &&
                                props.history.push("/cart");
                        }}
                    >
                        Добавить в корзину
                    </Button>

                </div>
            </div>

        </div>
    );
};
const mapStateToProps = state => ({
    version: state.builder.bookVersion
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Book);
