import React from "react";
import { Background } from "../../shared";
import "./index.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
import Return from './components/return';
import Shipping from './components/shipping';
import Payment from './components/payment';
const getComponent = (name, actions) => {
    switch (name) {
        case 'return':
            return <Return name={name} actions={actions} />;
        case 'payment':
            return <Payment name={name} actions={actions} />;
        case 'shipping':
            return <Shipping name={name} actions={actions} />;
    }
    
};
const stopClick = e => {
    e.stopPropagation();
};
class Modal extends React.Component {
    componentDidUpdate() {
        if (this.props.isOpen) {
            document.body.classList.toggle("HiddenOverflow", true);
        } else {
            document.body.classList.toggle("HiddenOverflow", false);
        }
    }

    render() {
        const { name, isOpen, actions} = this.props;
        if (!isOpen) {
            return null;
        }
        return (
            <Background
                close={actions.closeRouteModal}
                zIndex={"20"}
                isOpen={isOpen}
            > 
                <div onClick={stopClick} styleName="r" style={{}}>
                    {getComponent(name, actions)}
                </div>
            </Background>
        );
    }
}

const mapStateToProps = state => ({
    isOpen:state.routeModal.isOpen,
    name:state.routeModal.name
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
