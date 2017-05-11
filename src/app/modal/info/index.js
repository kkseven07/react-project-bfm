import React from "react";

import { Background } from "../../shared";
import "./builder.css";
import { connect } from "react-redux";
import * as actions from "../business/actions";
import { bindActionCreators } from "redux";
const Modal = props => {
    return (
        <Background isFetching>

            <div styleName="r">
                Hello you finished creating
            </div>

        </Background>
    );
};

const mapStateToProps = state => ({
    modalOpen: state.modalOpen
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
