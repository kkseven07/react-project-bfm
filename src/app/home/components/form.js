import React from "react";
import {
    Button,
    Input,
    Select,
    ErrorText,
    DescText,
    DescSmall
} from "../../shared";
import "./form.css";
import { connect } from "react-redux";
import * as actions from "../../../business/actions";
import { bindActionCreators } from "redux";
import range from "lodash/range";
import { data } from "../../shared";
const siteKey = "6LcrISYUAAAAAHK2ADjF_25cmmOepUUMrRKUV_Zj";
import Recaptcha from "react-recaptcha";
const callback = () => console.log("recapthcad");
const verifyCallback = response => console.log(response);
const getData = field => {
    if (field === "day") {
        return range(1, 32);
    } else if (field === "year") {
        return range(2010, 1939, -1);
    } else {
        return data.monthsList;
    }
};
const Part = ({ form, ...props }) => {
    let gift = {
        name: form.name.value,
        surname: form.surname.value,
        gender: form.gender.value,
        bookName: form.bookName.value,
        day: form.day.value,
        month: form.month.value,
        year: form.year.value,
        age: form.age.value,
        relation: form.relation.value,
        senderName: form.senderName.value,
        calculatedAge: parseInt(form.calculatedAge)
    };
    console.log(Recaptcha)
    return (
        <div className="flex flex-center flex-column" styleName="form">
            <DescText text="Для кого эта книга?" />
            <div style={{ margin: 3, marginTop: 0 }} />
            <DescSmall text="Укажите имя, пол и дату рождения" />
            <div style={{ margin: 6 }} />
            <Input
                placeholder="Имя"
                field={form.name}
                fieldType={"name"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.name.errorText} />
            <Select
                default="Пол"
                values={["female", "male"]}
                options={["Женский", "Мужской"]}
                field={form.gender}
                fieldType={"gender"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.gender.errorText} />
            <div className="flex width-full">
                <div styleName="day">
                    <Select
                        default="День"
                        values={getData("day")}
                        options={getData("day")}
                        field={form.day}
                        fieldType={"day"}
                        enter={props.actions.enterInput}
                    />
                </div>
                <div styleName="month">
                    <Select
                        default="Месяц"
                        values={getData("month")}
                        options={getData("month")}
                        field={form.month}
                        fieldType={"month"}
                        enter={props.actions.enterInput}
                    />

                </div>
                <div styleName="year">
                    <Select
                        values={getData("year")}
                        default="Год"
                        options={getData("year")}
                        field={form.year}
                        fieldType={"year"}
                        enter={props.actions.enterInput}
                    />
                </div>

            </div>
            {!form.dateExists &&
                <ErrorText text={"Данной даты не существует"} />}
            {form.dateExists &&
                <ErrorText
                    text={
                        form.month.errorText ||
                            form.day.errorText ||
                            form.year.errorText
                    }
                />}

            <DescText text="От кого эта книга?" />
            <DescSmall text="Ваше имя и название книги" />
            <div style={{ margin: 10, marginTop: 0 }} />
            <Input
                field={form.senderName}
                style=""
                placeholder="Как Вас зовут?"
                fieldType={"senderName"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.senderName.errorText} />
            <Input
                field={form.bookName}
                style=""
                placeholder="Название на обложке"
                fieldType={"bookName"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.bookName.errorText} />
            <div className="flex width-full">

                <Recaptcha
                    render="explicit"
                    onloadCallback={callback}
                    sitekey={siteKey}
                    verifyCallback={verifyCallback}
                />
            </div>

            <div className="flex width-full">
                <Button
                    click={() =>
                        props.actions.changeForm(
                            true,
                            "partOne",
                            gift,
                            props.history
                        )}
                >
                    Создать книгу
                </Button>
            </div>

        </div>
    );
};

const Form = ({ form: { isNext, ...props, canCreate }, actions, history }) => {
    return (
        <Part
            canCreate={canCreate}
            history={history}
            actions={actions}
            form={props}
        />
    );
};

const mapStateToProps = state => ({
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
