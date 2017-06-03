import React from "react";

import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
import { toSave } from "../utils";

const values = gender => {
    return [
        `Хороший друг`,
        `Всегда поможет в беде`,
        gender === "male" ? `Умен` : "Умна",
        gender === "male" ? `Скромен` : "Скромна"
    ];
};

export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">

            <Text>
                Каким положительным качеством обладает {book.name}?
            </Text>
            {form.input.value.trim() === "" &&
                <div style={{ padding: 15, paddingBottom: 10, paddingTop: 0 }}>
                    <Select
                        values={values(book.gender)}
                        options={values(book.gender)}
                        active
                        field={form.select}
                        fieldType={"virtue"}
                        enter={actions.builderInput}
                    />
                </div>}
            {form.input.value.trim() === "" &&
                <Text>
                    Или напишите свой вариант
                </Text>}

            <div style={{ padding: 15, paddingTop: 0 }}>

                <Input
                    placeholder={book.gender === "male" ? "Добрый" : "Добрая"}
                    field={form.input}
                    maxLength={25}
                    fieldType={"virtue"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                onSave={() => actions.updatePage(page, toSave(form))}
                close={actions.closeModal}
            />

        </div>
    );
};
