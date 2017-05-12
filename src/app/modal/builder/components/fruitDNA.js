import React from "react";

import ImageChooser from "./imageChooser";
import Text from "./text";
import Buttons from "./buttons";
export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Выберите один из фрукт-фактов
            </Text>
            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
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
