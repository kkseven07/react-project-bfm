import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
import {toSave} from "../utils"
const wishes = name => [
    `С пожеланиями, ${name}`,
    `С любовью, ${name}`,
    `На долгую память, ${name}`,
    `С уважением, ${name}`
];

export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Выберите один из вариантов
            </Text>

            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
            {form.input.value.trim() === "" &&
                <div style={{ padding: 15, paddingBottom: 10 }}>
                    <Select
                        active
                        values={wishes(book.sender_name)}
                        options={wishes(book.sender_name)}
                        field={form.select}
                        fieldType={"intro"}
                        enter={actions.builderInput}
                    />
                </div>}

            <Text>
                Или напишите свое пожелание
            </Text>

            <div style={{ padding: 15, paddingTop: 10 }}>

                <Input
                    placeholder="Пожелание"
                    field={form.input}
                    maxLength={50}
                    fieldType={"intro"}
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
