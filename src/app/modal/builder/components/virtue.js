import React from "react";

import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";

export default ({ page, book, actions }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Каким положительным качеством обладает {book.name}?
            </Text>
            <div style={{ padding: 15, paddingBottom: 10,paddingTop:0 }}>
                <Select
                    // default="Пол"
                    values={["female", "male"]}
                    options={[
                        `Хороший друг`,
                        `Всегда поможет в беде`,
                        book.gender==="male"?`Умен`:"Умна",
                        book.gender==="male"?`Скромен`:"Скромна",
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
                Или напишите свой вариант
            </Text>

            <div style={{ padding: 15, paddingTop: 0 }}>

                <Input
                    placeholder={book.gender==="male"?"Добрый":"Добрая"}
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
            <Buttons close={actions.closeModal} />

        </div>
    );
};
