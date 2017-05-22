import React from "react";
import { connect } from "react-redux";
import "./imageChooser.css";

const isSelected = (selectedCurrent, image) => {
    if (!selectedCurrent) {
        return false;
    } else {
        return image.url == selectedCurrent.url;
    }
};

const Chooser = ({ images, select, page, selectedImage, url }) => {
    return (
        <div className="flex flex-center width-full" styleName="r">
            {images.map(image => (
                <img
                    onClick={() => select({image},page)}
                    key={image.url}
                    styleName={`image ${isSelected(selectedImage, image) ? "selected" : ""}`}
                    src={url+image.url}
                />
            ))}
        </div>
    );
};

const mapStateToProps=(state)=>({
    url:state.init.url
})
export default connect(mapStateToProps)(Chooser);
