import React from "react";
import Text from './text'
import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import {TextArea} from '../../../shared'
import {toSave} from "../utils"
export default ({ page, book, actions, form }) => {
    const update = form.selectedImage?form.selectedImage.url:null
    const text = form.textarea.value
    return (
        <div className="flex flex-column width-full">
            <Text>выберите вариант страницы</Text>
            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
            <Text>Напишите послание</Text>
            <div style={{ padding: 15, paddingTop: 10 }}>

                <TextArea
                    placeholder="Послание"
                    field={form.textarea}
                    maxLength={300}
                    style={{height:'30vh'}}
                    fieldType={"wiseWord"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                close={actions.closeModal}
                onSave={() =>
                    actions.updatePage(page, {selectedImage: form.selectedImage && form.selectedImage.url,
                        text: form.textarea.value})}
            />

        </div>
    );
};
