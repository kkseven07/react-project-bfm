import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";

export default ({ page, book, actions, form }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Каким характером обладает {book.name}?
            </Text>
            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />
            <div style={{ height: 10 }} />
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
