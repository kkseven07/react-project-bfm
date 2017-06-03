import React from "react";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button } from "../../../shared";
import { toSave } from "../utils";
import ImageChooser from "./imageChooser";

export default ({ page, book, actions, form }) => {

    return (
        <div className="flex flex-column width-full">
            <Text>
                Выберите один из вариантов страницы
            </Text>
            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
            <Buttons
                onSave={() => actions.updatePage(page, {
                        selectedImage: form.selectedImage &&
                            form.selectedImage.url
                    })}
                close={actions.closeModal}
            />

        </div>
    );
};
