import React from "react";

import ImageChooser from "./imageChooser";

export default ({ page, book }) => {
    return (
        <div className="flex flex-column">
            <ImageChooser
                images={page.images}
                select={() => console.log("chose")}
            />
        </div>
    );
};
