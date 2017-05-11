import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";

export default ({ page, book, actions }) => {
    return (
        <div className="flex flex-column width-full">
            <Text>
                Каким характером обладает {book.name}?
            </Text>
            <ImageChooser
                images={page.images}
                select={() => console.log("chose")}
            />
            <div style={{height:10}}/>
            <Buttons close={actions.closeModal} />

        </div>
    );
};
