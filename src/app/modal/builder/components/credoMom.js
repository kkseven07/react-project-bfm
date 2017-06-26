import React from "react";
import Text from './text'
import Buttons from "./buttons";
import {TextArea, Input} from '../../../shared'
import {toSave} from "../utils"
import './quotes.css'

export default ({ page, book, actions, form }) => {
    const text1 = form.input.value;
    const text = form.textarea.value;
    const quote =[
        'Сердце матери — бездна, в глубине которой всегда найдётся прощение.',
        'И когда матери целуют своих детей, и когда ругают, они любят их одинаково.',
        'Руки матерей сотканы из нежности — дети спят на них спокойным сном.',
        'Мама – единственное на земле божество, не знающее атеистов.'
    ]
    const author = [
        'Оноре де Бальзак',
        'Перл Бак',
        'Виктор Гюго',
        'Э. Легуве',
    ];
    return (
        <div className="flex flex-column width-full">
            <Text>Выберите одну из цитат про маму.</Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[0], 'credoMom', 'textarea'),
                                actions.builderInput(author[0], 'credoMom', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[0]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[0]&&'static'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[1], 'credoMom', 'textarea'),
                                actions.builderInput(author[1], 'credoMom', 'input')
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
                                actions.builderInput(quote[2], 'credoMom', 'textarea'),
                                actions.builderInput(author[2], 'credoMom', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[2]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[2]&&'static'}}>
                            Вариант 3
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[3], 'credoMom', 'textarea'),
                                actions.builderInput(author[3], 'credoMom', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[3]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[3]&&'static'}}>
                            Вариант 4
                        </div>
                    </div>
            <Text>Или напишите свой вариант</Text>
            <div style={{ padding: 15, paddingTop: 10 }}>

                <TextArea
                    placeholder="Послание"
                    field={form.textarea}
                    maxLength={120}
                    style={{height:'20vh'}}
                    fieldType={"credoMom"}
                    enter={actions.builderInput}
                />
            </div>
            <Text>Автор</Text>

            <div style={{ padding: 15, paddingTop: 10 }}>

                <Input
                    placeholder="Автор"
                    field={form.input}
                    maxLength={25}
                    fieldType={"credoMom"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                close={actions.closeModal}
                onSave={() =>
                    actions.updatePage(page, {text,text1})}
            />

        </div>
    );
};
