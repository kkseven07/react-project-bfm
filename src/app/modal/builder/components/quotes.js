import React from "react";
import './quotes.css'
import ImageChooser from "./imageChooser";
import Buttons from "./buttons";
import Text from "./text";
import { Input, Select, Button, TextArea } from "../../../shared";
import {toSave} from "../utils"
const author = [
    'Джордж Бернард Шоу',
    'Генри Форд',
    'Бенджамин Франклин',
    'Джон Максвелл',

];

const quote =[
    'Сделай так, чтобы получить то, что ты хочешь, иначе тебе придётся любить то, что ты имеешь.',
    'Воздух полон идей. Они постоянно стучатся к вам в голову. Вы просто должны знать что вы хотите, затем забыть это и заниматься своим делом. Идея придёт внезапно. Так было всегда.',
    'Тому, кто хочет жить в мире и покое, не следует говорить все, что он знает, и судить то, что он видит.',
    'Ваша жизнь на 10% зависит от того, что с вами происходит, и на 90% от того, как вы реагируете на эти события.'
]
export default ({ page, book, actions, form }) => {
    console.log("form", form)
    // const update = toSave(form);
    const text1 = form.input.value;
    const text = form.textarea.value;

    return (
        <div className="flex flex-column width-full">

            <div >
                <Text>
                   Выберите цитату или напишите свою
                </Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[0], 'quotes', 'textarea'),
                                actions.builderInput(author[0], 'quotes', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[0]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[0]&&'static'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[1], 'quotes', 'textarea'),
                                actions.builderInput(author[1], 'quotes', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[1]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[1]&&'static'}}>
                            Вариант 2
                        </div>
                    </div>

                    <div className="flex flex-center" style={{marginTop:'15px'}}>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[2], 'quotes', 'textarea'),
                                actions.builderInput(author[2], 'quotes', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[2]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[2]&&'static'}}>
                            Вариант 3
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[3], 'quotes', 'textarea'),
                                actions.builderInput(author[3], 'quotes', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[3]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[3]&&'static'}}>
                            Вариант 4
                        </div>
                    </div>
            </div>
            <div style={{ padding: 15, paddingBottom: 10 }}>
                    <TextArea
                        field={form.textarea}
                        fieldType={"quotes"}
                        enter={actions.builderInput}
                        style={{height:'100px'}}
                        maxLength={300}
                    />
            </div>

            <Text>
                Автор
            </Text>

            <div style={{ padding: 15, paddingTop: 10 }}>

                <Input
                    placeholder="Автор"
                    field={form.input}
                    maxLength={35}
                    fieldType={"quotes"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                onSave={() => actions.updatePage(page, {text, text1})}
                close={actions.closeModal}
            />
        </div>
    );
};
