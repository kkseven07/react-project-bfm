import React from "react";
import "./gallery.css";
import Slider from "react-slick";

export default props => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000
    };
    const style = {
        zIndex: 100
    };
    return (
        <div className="width-full flex flex-center" styleName="r">
            <div styleName="slider">
                <Slider {...settings}>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
                            draggable="false"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/6603/landmark-bridge-cliff-california.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                            draggable="false"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/40081/pexels-photo-40081.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                            draggable="false"
                        />
                    </div>
                </Slider>
            </div>

        </div>
    );
};
