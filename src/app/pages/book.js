import React from "react";
import "./book.css";
import { connect } from "react-redux";
import * as actions from "../../business/actions/index.js";
import { bindActionCreators } from "redux";
import Hard from "./hard.jpg";
import Soft from "./soft.jpg";
import Digital from "./soft1.jpg";
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

const Book = props => {
    return (
        <div className="width-full flex flex-center flex-wrap" styleName="r">
            <div className="flex flex-center" styleName="book-form">
                <img src={Soft} style={{ width: 320, height: 320 }} />
            </div>
            <div
                className="flex flex-center flex-column"
                styleName="book-form form"
            >
                <Text>
                    Выберите один из вариантов
                </Text>

                <div
                    className="flex flex-column"
                    style={{ alignItems: "flex-start", paddingLeft: 10 }}
                >
                    {data.map((val, i) => (
                        <div key={i} className="flex flex-center">
                            <input
                                styleName="input"
                                type="radio"
                                name="version"
                                checked={val.type===props.version.value}
                                value={val.type}
                                onChange={e =>
                                    props.actions.bookVersion(e.target.value)}
                            />
                            {val.label}
                            <div
                                style={{
                                    margin: 20,
                                    fontSize: 20,
                                    fontFamily: "RobotoMedium"
                                }}
                            >
                                {val.price}
                            </div>
                        </div>
                    ))}

                    {props.version.value === "" &&
                        !props.version.isPristine &&
                        <ErrorText
                            text={"Выберите один из вариантов формата книги"}
                        />}

                    <div style={{ height: 20, alignSelf: "center" }} />
                    <Button
                        click={() => {
                            props.actions.bookVersion(props.version.value)
                            props.version.value !== "" &&
                                props.history.push("/");
                        }}
                    >
                        Заказать книгу
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
