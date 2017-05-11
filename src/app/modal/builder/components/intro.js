import React from "react";

import ImageChooser from "./imageChooser";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
export default ({ page, book, actions }) => {
    console.log(book);
    return (
        <div className="flex flex-column width-full">
            <Text>
                Выберите один из вариантов
            </Text>

            <ImageChooser
                images={page.images}
                select={() => console.log("chose")}
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
                    field={{
                        value: "",
                        isPristine: true,
                        isValid: true,
                        errorText: ""
                    }}
                    maxLength={20}
                    fieldType={"name"}
                    enter={() => console.log("enter")}
                />
            </div>
            <div
                className="flex width-full space-between"
                style={{ padding: 20, paddingTop: 0, paddingBottom: 0 }}
            >

                <Button click={() => actions.closeModal()}>Назад</Button>
                <Button click={() => console.log("save")}>Сохранить</Button>
            </div>
        </div>
    );
};
