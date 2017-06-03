import React from "react";

import Buttons from "./buttons";
export default ({ page, book, actions }) => {
    return (
        <div className="flex flex-column width-full">
            <Buttons close={actions.closeModal} />

        </div>
    );
};
