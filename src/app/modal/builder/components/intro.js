import React from "react";
import './intro.css'
import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button, TextArea } from "../../../shared";
import {toSave} from "../utils"
const wishes = name => [
    `С пожеланиями, ${name}`,
    `С любовью, ${name}`,
    `На долгую память, ${name}`,
    `С уважением, ${name}`,

];

const wishText =[
    'Это просто возмутительно, что о вас до сих пор не было написано книги и, наконец, вот она!',
    'Если кто и заслуживает книгу с именем на обложке, так это вы!'
]
export default ({ page, book, actions, form }) => {
    const update = toSave(form);
    const text1 = form.textarea.value;

    return (
        <div className="flex flex-column width-full">
            <Text>
                Выберите один из вариантов страницы
            </Text>

            <ImageChooser
                images={page.images}
                page={page}
                selectedImage={form.selectedImage}
                select={actions.builderImage}
            />



            <div >
                <Text>
                   Измените текст или выберите один из
                </Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>actions.builderInput(wishText[0], 'intro', 'textarea')}
                            styleName="text-variants"
                            style={{background:form.textarea.value===wishText[0]&&'rgb(88, 119, 255)'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>actions.builderInput(wishText[1], 'intro', 'textarea')}
                            styleName="text-variants"
                            style={{background:form.textarea.value===wishText[1]&&'rgb(88, 119, 255)'}}>
                            Вариант 2
                        </div>
                    </div>
            </div>
            <div style={{ padding: 15, paddingBottom: 10 }}>
                    <TextArea
                        field={form.textarea}
                        fieldType={"intro"}
                        enter={actions.builderInput}
                        style={{height:'100px'}}
                        maxLength={100}
                    />
            </div>

            {form.input.value.trim()==="" &&<Text>
                выберите пожелание
            </Text>}
            {form.input.value.trim() === "" &&
                <div style={{ padding: 15, paddingBottom: 10 }}>
                    <Select
                        active
                        values={wishes(book.sender_name)}
                        options={wishes(book.sender_name)}
                        field={form.select}
                        fieldType={"intro"}
                        enter={actions.builderInput}
                    />
                </div>
                }

            <Text>
                Или напишите свое
            </Text>

            <div style={{ padding: 15, paddingTop: 10 }}>

                <Input
                    placeholder="Пожелание"
                    field={form.input}
                    maxLength={50}
                    fieldType={"intro"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                onSave={() => actions.updatePage(page, {...update, text1})}
                close={actions.closeModal}
            />
        </div>
    );
};
