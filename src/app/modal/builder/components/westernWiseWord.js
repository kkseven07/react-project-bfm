import React from "react";

import ImageChooser from "./imageChooser";
import Buttons from './buttons'
export default ({ page, book, actions }) => {
    return (
        <div className="flex flex-column width-full">
            <ImageChooser
                images={page.images}
                select={() => console.log("chose")}
            />
            <Buttons close={actions.closeModal} />

        </div>
    );
};
