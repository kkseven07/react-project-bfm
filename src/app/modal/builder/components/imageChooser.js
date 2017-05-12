import React from "react";
import "./imageChooser.css";

const isSelected = (selectedCurrent, image) => {
    if (!selectedCurrent) {
        return false;
    } else {
        return image.url == selectedCurrent.url;
    }
};

export default ({ images, select, page, selectedImage }) => {
    return (
        <div className="flex flex-center width-full" styleName="r">
            {images.map(image => (
                <img
                    onClick={() => select({image},page)}
                    key={image.url}
                    styleName={`image ${isSelected(selectedImage, image) ? "selected" : ""}`}
                    src={"http://localhost:4000"+image.url}
                />
            ))}
        </div>
    );
};
