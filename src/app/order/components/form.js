import {
    Button,
    Input,
    Select,
    ErrorText,
    DescText,
    DescSmall
} from "../../shared";
import "./form.css";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../business/actions";
const orderForm =({form, actions} ) => {
    return (
        <div style={{ width: "90%", maxWidth: 500 }}>

            <Input
                maxLength={50}
                placeholder="Имя"
                field={form.name}
                fieldType={"name"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>
                <ErrorText text={form.name.errorText} />
            </div>
            <Input
                placeholder="email@email.com"
                field={form.email}
                maxLength={50}
                fieldType={"email"}
                enter={(actions.emailInput)}
                onBlur={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>

                <ErrorText text={form.email.errorText} />
            </div>

            <Input
                placeholder="Ваш телефон"
                field={form.phone}
                maxLength={50}
                fieldType={"phone"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>
                <ErrorText text={form.phone.errorText} />
            </div>
            <Input
                placeholder="Город, улица, дом, квартира"
                field={form.address}
                maxLength={50}
                fieldType={"address"}
                enter={actions.orderInput}
            />
            <div style={{ padding: 5, paddingLeft: 0 }}>
                <ErrorText text={form.address.errorText} />
            </div>

        </div>
    );
};
const mapStateToProps = state => ({
    form: state.orderForm
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(orderForm);