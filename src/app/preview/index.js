import { ViewPager, Frame, Track, View } from "react-view-pager";
import React from "react";
import "./preview.css"
export default props => {
    return (
        <div>
            <ViewPager tag="main">
                <Frame styleName="frame">
                    <Track
                        ref={c => (this.track = c)}
                        viewsToShow={2}
                        infinite
                        styleName="track"
                    >
                        <View styleName="view v1">1</View>
                        <View styleName="view v2">2</View>
                        <View styleName="view v3">3</View>
                        <View styleName="view v4">4</View>
                    </Track>
                </Frame>
                <nav styleName="pager-controls">
                    <div
                        styleName="pager-control pager-control prev"
                        onClick={() => this.track.prev()}
                    >
                        Prev
                    </div>
                    <div
                        styleName="pager-control pager-control next"
                        onClick={() => this.track.next()}
                    >
                        Next
                    </div>
                </nav>
            </ViewPager>

        </div>
    );
};
