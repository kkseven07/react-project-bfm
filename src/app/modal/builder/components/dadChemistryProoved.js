import React from "react";
import Text from './text'
import Buttons from "./buttons";
import {TextArea} from '../../../shared'
import {toSave} from "../utils"
import './quotes.css'
export default ({ page, book, actions, form }) => {
    const text = form.textarea.value;
    const quote =[
    'потому, что только ты научил меня не сдаваться',
    'потому, что ты много работаешь на благо семьи!',
    'потому, что ты потрясающе готовишь яичницу!',
    'потому, что благодаря тебе у меня было самое счастливое детство!'
    ]
    return (
        <div className="flex flex-column width-full">
            <Text>Напишите, почему ваш папа лучший на свете!</Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>
                            
                                actions.builderInput(quote[0], 'dadChemistryProoved', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[0]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[0]&&'static'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[1], 'dadChemistryProoved', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[1]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[1]&&'static'}}>
                            Вариант 2
                        </div>
                    </div>

                    <div className="flex flex-center" style={{marginTop:'15px'}}>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[2], 'dadChemistryProoved', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[2]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[2]&&'static'}}>
                            Вариант 3
                        </div>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[3], 'dadChemistryProoved', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[3]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[3]&&'static'}}>
                            Вариант 4
                        </div>
                    </div>
            
            <div style={{ padding: 15, paddingTop: 30 }}>

                <TextArea
                    placeholder="Пишите текст здесь..."
                    field={form.textarea}
                    maxLength={100}
                    style={{height:'10vh'}}
                    fieldType={"dadChemistryProoved"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
                close={actions.closeModal}
                onSave={() =>
                    actions.updatePage(page, {text})}
            />
        
        </div>
    );
};
