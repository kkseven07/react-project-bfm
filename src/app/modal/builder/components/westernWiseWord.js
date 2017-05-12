import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">
            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
            <Buttons
                close={actions.closeModal}
                onSave={() =>
                    actions.updatePage(page, {
                        selectedImage: form.selectedImage &&
                            form.selectedImage.url
                    })}
            />

        </div>
    );
};
