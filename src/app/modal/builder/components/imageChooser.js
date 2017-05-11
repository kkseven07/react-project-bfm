import React from "react";
import "./imageChooser.css";
export default ({ images, select }) => {
    return (
        <div className="flex flex-center width-full" styleName="r">
            {images.map(image => (
                <img
                    onClick={() => select(image)}
                    key={image.url}
                    styleName="image"
                    // styleName={`image ${isSelected(selectedCoolPlaceImage, image) ? "selected" : ""}`}
                    src={"http://localhost:4000"+image.url}
                />
            ))}
        </div>
    );
};
