import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";

const wishes = name => [
    `С пожеланиями, ${name}`,
    `С любовью, ${name}`,
    `На долгую память, ${name}`,
    `С уважением, ${name}`
];

const toSave = form => {
    let obj = {};
    if (form.input.value.trim() === "" && form.select.value !== "") {
        obj = { text: form.select.value };
    } else if (form.input.value.trim() !== "") {
        obj = { text: form.input.value };
    } else {
        obj = { text: null };
    }
    return {
        selectedImage: form.selectedImage && form.selectedImage.url,
        ...obj
    };
};

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
            <div style={{ padding: 15, paddingBottom: 10 }}>
                <Select
                    active
                    values={wishes(book.sender_name)}
                    options={wishes(book.sender_name)}
                    field={form.select}
                    fieldType={"intro"}
                    enter={actions.builderInput}
                />
            </div>

            <Text>
                Или напишите свое пожелание
            </Text>

            <div style={{ padding: 15, paddingTop: 10 }}>

                <Input
                    placeholder="Пожелание"
                    field={form.input}
                    maxLength={60}
                    fieldType={"intro"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                onSave={() =>
                    actions.updatePage(page, toSave(form))}
                close={actions.closeModal}
            />
        </div>
    );
};
