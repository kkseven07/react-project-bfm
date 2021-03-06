import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../business/actions/index.js";
import "./coverChooser.css";
import { colors } from "../../shared/utils.js";

class CoverChooser extends Component {
    getStyle = color => (color === this.props.color ? "el selected" : "el");
    render() {

        return (
            <div className="flex width-full flex-center" styleName="r">
                <div style={{ marginTop: 10, fontFamily: "RobotoRegular" }}>
                    Выберите цвет обложки
                </div>
                <div className="flex width-full flex-center" styleName="c">
                    {colors.map(color => (
                        <button
                            onClick={e => {
                                this.props.actions.updatePage(this.props.page, {
                                    background: color.background,
                                    text_color: color.text,
                                    border_color:color.borderColor
                                });
                            }}
                            key={color.background}
                            styleName={this.getStyle(color.background)}
                            style={{ backgroundColor: color.background }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // color: state.edit.coverColor,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoverChooser);
