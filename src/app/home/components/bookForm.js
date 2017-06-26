import React from "react";
import "./bookForm.css";
import Form from "./form";
import Book from "./book";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
const bookTypes = {
    you: "you",
    dad: "dad",
    dad_s: "dad",
    dad_d: "dad",
    mom: "mom",
    mom_s: "mom",
    mom_d: "mom"
};
const BookForm = props => {
    const bookType = bookTypes[props.form.relation.value];
    const backgroundColor=bookType==="mom"?"#fff1f8":"#D9E9FF"
    return (
        <div className="width-full flex flex-center flex-wrap"
            style={{backgroundColor}}
            styleName="r">
            <div className="flex flex-center" styleName="book-form">
                <Book
                    bookType={bookType}
                    name={props.form.name.value}
                    bookName={props.form.bookName.value}
                />
            </div>
            <div className="flex flex-center" styleName="book-form form">
                <Form
                    bookType={bookType}
                    actions={props.actions}
                    form={props.form}
                    history={props.history}
                />
            </div>

        </div>
    );
};
const mapStateToProps = state => ({
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
