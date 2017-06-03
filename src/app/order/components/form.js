import {
    Button,
    Input,
    Select,
    ErrorText,
    DescText,
    DescSmall
} from "../../shared";
import "./form.css";
import React from "react";

export default ({ form, actions }) => {
    return (
        <div style={{ width: "90%", maxWidth: 500 }}>

            <Input
                maxLength={50}
                placeholder="Имя"
                field={form.name}
                fieldType={"name"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>
                <ErrorText text={form.name.errorText} />
            </div>
            <Input
                placeholder="Ваша электронная почта"
                field={form.email}
                maxLength={50}
                fieldType={"email"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>

                <ErrorText text={form.email.errorText} />
            </div>

            <Input
                placeholder="Ваш телефон"
                field={form.phone}
                maxLength={50}
                fieldType={"phone"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>
                <ErrorText text={form.phone.errorText} />
            </div>

        </div>
    );
};
