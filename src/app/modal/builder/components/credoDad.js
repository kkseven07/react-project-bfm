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
        'Любой может стать отцом, но только особенный становится папой.',
        'Не надобно другого образца, когда в глазах пример отца.',
        'Без хороших отцов нет хорошего воспитания, несмотря на все школы.',
        'Строгость отца — прекрасное лекарство: в нем больше сладкого, чем горького.'
    ]
    const author = [
        'Народная мудрость',
        'Грибоедов Александр',
        'Карамзин',
        'Эпиктет',
    ];
    return (
        <div className="flex flex-column width-full">
            <Text>Выберите одну и цитат про папу.</Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[0], 'credoDad', 'textarea'),
                                actions.builderInput(author[0], 'credoDad', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[0]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[0]&&'static'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[1], 'credoDad', 'textarea'),
                                actions.builderInput(author[1], 'credoDad', 'input')
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
                                actions.builderInput(quote[2], 'credoDad', 'textarea'),
                                actions.builderInput(author[2], 'credoDad', 'input')
                            }}
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[2]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[2]&&'static'}}>
                            Вариант 3
                        </div>
                        <div onClick={()=>
                            {
                                actions.builderInput(quote[3], 'credoDad', 'textarea'),
                                actions.builderInput(author[3], 'credoDad', 'input')
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
                    fieldType={"credoDad"}
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
