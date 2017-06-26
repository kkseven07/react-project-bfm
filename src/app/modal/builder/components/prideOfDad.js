import React from "react";
import Text from './text'
import Buttons from "./buttons";
import {TextArea} from '../../../shared'
import {toSave} from "../utils"
export default ({ page, book, actions, form }) => {
    const text = form.textarea.value
    return (
        <div className="flex flex-column width-full">
            <Text>Напишите свой вариант текста</Text>
            <div style={{ padding: 15, paddingTop: 10 }}>

                <TextArea
                    placeholder="Послание"
                    field={form.textarea}
                    maxLength={80}
                    style={{height:'10vh'}}
                    fieldType={"prideOfDad"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                close={actions.closeModal}
                onSave={() =>
                    actions.updatePage(page, {text})}
            />

        </div>
    );
};
