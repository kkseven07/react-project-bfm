import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
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
                    // default="Пол"
                    values={["female", "male"]}
                    options={[
                        `С пожеланиями, ${book.sender_name}`,
                        `С любовью, ${book.sender_name}`,
                        `На долгую память, ${book.sender_name}`,
                        `С уважением, ${book.sender_name}`
                    ]}
                    field={{
                        value: `С пожеланиями, ${book.sender_name}`,
                        isPristine: true,
                        isValid: true,
                        errorText: ""
                    }}
                    fieldType={"gender"}
                    enter={() => select}
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
                    actions.updatePage(page, {
                        selectedImage: form.selectedImage &&
                            form.selectedImage.url
                    })}
                close={actions.closeModal}
            />
        </div>
    );
};
