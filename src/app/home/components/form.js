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

import range from "lodash/range";
import { data } from "../../shared";
const siteKey = "6LcrISYUAAAAAHK2ADjF_25cmmOepUUMrRKUV_Zj";
import Recaptcha from "react-recaptcha";
const getData = field => {
    if (field === "day") {
        return range(1, 32);
    } else if (field === "year") {
        return range(2010, 1941, -1);
    } else {
        return data.monthsList;
    }
};

const You = ({ form, ...props }) => {
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
    const verifyCallback = response => props.actions.captchaVerify();
    const callback = () => console.log("");

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
            <div className="flex width-full" style={{ paddingBottom: 8 }}>

                <Recaptcha
                    render="explicit"
                    onloadCallback={callback}
                    sitekey={siteKey}
                    hl="ru"
                    // theme="dark"
                    verifyCallback={verifyCallback}
                />
            </div>
            {!form.verifyed &&
                !form.captchaPristine &&
                <ErrorText text={"Вы не робот?"} />}

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

const MomAndDad = ({ form, bookType, ...props }) => {
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
    const verifyCallback = response => props.actions.captchaVerify();
const callback = () => console.log("");

    const descText = bookType === "mom"
        ? "Как зовут Вашу маму?"
        : "Как зовут Вашего папу?";
    return (
        <div className="flex flex-center flex-column" styleName="form">
            <DescText text={descText} />
            <div style={{ margin: 3, marginTop: 0 }} />
            <DescSmall text="Укажите имя, дату рождения и название" />
            <div style={{ margin: 6 }} />
            <Input
                placeholder="Имя"
                field={form.name}
                fieldType={"name"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.name.errorText} />

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
            <Input
                field={form.bookName}
                style=""
                placeholder="Название на обложке"
                fieldType={"bookName"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.bookName.errorText} />

            <DescText text="От кого эта книга?" />
            <DescSmall text="Ваше имя и кем приходитесь" />
            <div style={{ margin: 10, marginTop: 0 }} />
            <Input
                field={form.senderName}
                style=""
                placeholder="Как Вас зовут?"
                fieldType={"senderName"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.senderName.errorText} />
            <Select
                default="Кем приходитесь?"
                values={["son", "daughter"]}
                options={["Сын", "Дочь"]}
                field={form.sondaug}
                fieldType={"sondaug"}
                enter={props.actions.enterInput}
            />
            <ErrorText text={form.sondaug.errorText} />
            <div className="flex width-full" style={{ paddingBottom: 8 }}>

                <Recaptcha
                    render="explicit"
                    onloadCallback={callback}
                    sitekey={siteKey}
                    hl="ru"
                    // theme="dark"
                    verifyCallback={verifyCallback}
                />
            </div>
            {!form.verifyed &&
                !form.captchaPristine &&
                <ErrorText text={"Вы не робот?"} />}

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

export default ({
    form: { isNext, ...props, canCreate },
    bookType,
    actions,
    history
}) => {
    return bookType === "you"
        ? <You
              canCreate={canCreate}
              history={history}
              actions={actions}
              form={props}
          />
        : <MomAndDad
              bookType={bookType}
              canCreate={canCreate}
              history={history}
              actions={actions}
              form={props}
          />;
};
