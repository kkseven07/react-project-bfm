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
import ReactGA from "react-ga";
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

// const createBook = (detail, callback,callbackParams) => {
//     const action = detail === "you"
//         ? "Create book of you"
//         : "Create book of parents";
//     ReactGA.event({
//         category: "Create book",
//         action
//     });
//     props.actions.changeForm(true, "partOne", gift, props.history);
// };

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
            <DescSmall text="Укажите имя, дату рождения и пол" />
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

            <div className="flex width-full" styleName="container">
                <div className="flex flex-column" styleName="gender">
                    <div
                        className="flex width-full"
                        styleName={
                            form.gender.errorText === ""
                                ? "group"
                                : "group border-red"
                        }
                    >
                        <div
                            className="flex flex-center"
                            styleName={`genderButton girl ${form.gender.value === "female" ? "selected" : ""}`}
                            onClick={() => {
                                props.actions.enterInput(
                                    "female",
                                    "gender",
                                    "select"
                                );
                            }}
                        >
                            Ж
                        </div>
                        <div
                            className="flex flex-center"
                            styleName={`genderButton boy ${form.gender.value === "male" ? "selected" : ""}`}
                            onClick={() => {
                                props.actions.enterInput(
                                    "male",
                                    "gender",
                                    "select"
                                );
                            }}
                        >
                            М
                        </div>
                    </div>
                    <div
                        className="flex width-full flex-center"
                        styleName="smallText"
                    >
                        {form.gender.errorText === ""
                            ? <div>
                                  Пол
                                  {form.gender.value === "male"
                                      ? ": мужской"
                                      : form.gender.value === "female"
                                            ? ": женский"
                                            : ""}
                              </div>
                            : <div style={{ color: "red" }}>
                                  Вы забыли пол!
                              </div>}
                    </div>
                </div>
                <div className="flex flex-column" styleName="age">

                    <div className="flex width-full" styleName="group">
                        <div
                            onClick={() => {
                                props.actions.enterInput("today", "age", "");
                            }}
                            className="flex flex-center"
                            styleName={`ageButton today ${form.age.value === "today" ? "selected" : ""}`}
                        >
                            {form.dateExists && form.calculatedAge !== ""
                                ? form.calculatedAge
                                : "Сегодня"}
                        </div>
                        <div
                            onClick={() => {
                                props.actions.enterInput("next", "age", "");
                            }}
                            className="flex flex-center"
                            styleName={`ageButton next ${form.age.value !== "today" ? "selected" : ""}`}
                        >
                            {form.dateExists && form.calculatedAge !== ""
                                ? parseInt(form.calculatedAge) + 1
                                : "Через год"}

                        </div>
                    </div>
                    <div
                        className="flex width-full flex-center"
                        styleName="smallText"
                    >
                        Возраст в книге
                    </div>

                </div>
            </div>

            <div style={{ height: 30 }} />

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
                <Button
                    click={() => {
                        ReactGA.event({
                            category: "Create book",
                            action: "Clicked create book of you"
                        });
                        props.actions.changeForm(
                            true,
                            "partOne",
                            gift,
                            props.history
                        );
                    }}
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
            <DescSmall text="Укажите имя, дату рождения и кем приходитесь" />
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


            <div className="flex width-full" styleName="container">
                <div className="flex flex-column" styleName="gender">
                    <div
                        className="flex width-full"
                        styleName={
                            form.sondaug.errorText === ""
                                ? "group"
                                : "group border-red"
                        }
                    >
                        <div
                            className="flex flex-center"
                            styleName={`genderButton girl ${form.sondaug.value === "daughter" ? "selected" : ""}`}
                            onClick={() => {
                                props.actions.enterInput(
                                    "daughter",
                                    "sondaug",
                                    "select"
                                );
                            }}
                        >
                            Дочь
                        </div>
                        <div
                            className="flex flex-center"
                            styleName={`genderButton boy ${form.sondaug.value === "son" ? "selected" : ""}`}
                            onClick={() => {
                                props.actions.enterInput(
                                    "son",
                                    "sondaug",
                                    "select"
                                );
                            }}
                        >
                            Сын
                        </div>
                    </div>
                    <div
                        className="flex width-full flex-center"
                        styleName="smallText"
                    >
                        {form.sondaug.errorText === ""
                            ? <div>
                                  Кем приходитесь?
                              </div>
                            : <div style={{ color: "red" }}>
                                  Вы забыли меня!
                              </div>}
                    </div>
                </div>
                <div className="flex flex-column" styleName="age">

                    <div className="flex width-full" styleName="group">
                        <div
                            onClick={() => {
                                props.actions.enterInput("today", "age", "");
                            }}
                            className="flex flex-center"
                            styleName={`ageButton today ${form.age.value === "today" ? "selected" : ""}`}
                        >
                            {form.dateExists && form.calculatedAge !== ""
                                ? form.calculatedAge
                                : "Сегодня"}
                        </div>
                        <div
                            onClick={() => {
                                props.actions.enterInput("next", "age", "");
                            }}
                            className="flex flex-center"
                            styleName={`ageButton next ${form.age.value !== "today" ? "selected" : ""}`}
                        >
                            {form.dateExists && form.calculatedAge !== ""
                                ? parseInt(form.calculatedAge) + 1
                                : "Через год"}

                        </div>
                    </div>
                    <div
                        className="flex width-full flex-center"
                        styleName="smallText"
                    >
                        Возраст в книге
                    </div>

                </div>
            </div>
            <div style={{height:30}}/>
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
                <Button
                    click={() => {
                        ReactGA.event({
                            category: "Create book",
                            action: "Clicked create book for mom or dad"
                        });
                        props.actions.changeForm(
                            true,
                            "partOne",
                            gift,
                            props.history
                        );
                    }}
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
