import React from "react";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
import { toSave } from "../utils";

export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Что иногда может позволить себе {book.name}?
            </Text>
            {form.input.value.trim() === "" &&
                <div style={{ padding: 15, paddingBottom: 10, paddingTop: 0 }}>
                    <Select
                        active
                        values={[`Много спать`, `Опаздывать`, "Кричать"]}
                        options={[`Много спать`, `Опаздывать`, "Кричать"]}
                        field={form.select}
                        fieldType={"vice"}
                        enter={actions.builderInput}
                    />
                </div>}
            {form.input.value.trim() === "" &&
                <Text>
                    Или напишите свой вариант
                </Text>}

            <div style={{ padding: 15, paddingTop: 0 }}>

                <Input
                    placeholder={"Плакать"}
                    field={form.input}
                    maxLength={30}
                    fieldType={"vice"}
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
