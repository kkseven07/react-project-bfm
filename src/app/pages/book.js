import React from "react";
import "./book.css";

import Hard from "./hard.jpg";
import Soft from "./soft.jpg";
import Digital from "./soft1.jpg";
import Text from "../modal/builder/components/text";
import { Button } from "../shared";
export default props => {
    return (
        <div className="width-full flex flex-center flex-wrap" styleName="r">
            <div className="flex flex-center" styleName="book-form">
                <img src={Soft} style={{ width: 400, height: 400 }} />
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
                    style={{ alignItems: "flex-start",paddingLeft:10 }}
                >
                    <div className="flex flex-center">
                        <input
                            styleName="input"
                            type="radio"
                            name="gender"
                            value="digital"
                        />
                        {" "}
                        Цифровая версия книги
                        <div style={{ margin: 20, fontSize: 20, fontFamily:"RobotoMedium" }}> 2900 тг</div>
                    </div>

                    <div className="flex flex-center">
                        <input
                            styleName="input"
                            type="radio"
                            name="gender"
                            value="soft"
                        />
                        Книга в мягком переплете
                        <div style={{ margin: 20, fontSize: 20, fontFamily:"RobotoMedium" }}> 9900 тг</div>
                    </div><div className="flex flex-center">

                        <input
                            styleName="input"
                            type="radio"
                            name="gender"
                            value="hard"
                        />
                        {" "}
                        Книга в твердом переплете
                        <div style={{margin:20, fontSize:20, fontFamily:"RobotoMedium"}}> 14900 тг</div>
                    </div>
                    <div style={{ height: 20, alignSelf: "center" }} />
                    <Button click={() => {}}>Заказать книгу</Button>
                </div>
            </div>

        </div>
    );
};
