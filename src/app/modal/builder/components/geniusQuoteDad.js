import React from "react";
import Text from './text'
import Buttons from "./buttons";
import {TextArea} from '../../../shared'
import {toSave} from "../utils"
import './quotes.css'
export default ({ page, book, actions, form }) => {
    const text = form.textarea.value;
    const quote =[
    'Хочешь чаю? Пойди налей.',
    'Будем старыми, ты нам и стакан воды не принесешь?!',
    'Мы тебе сейчас это купим, но это будет в честь дня рождения.',
    'А если весь класс с крыши прыгнет, ты тоже прыгнешь?!'
    ]
    return (
        <div className="flex flex-column width-full">
            <Text>Напишите одну из типичных фраз вашего папы.</Text>
                 <div className="flex flex-center" >
                        <div onClick={()=>
                            
                                actions.builderInput(quote[0], 'geniusQuoteDad', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[0]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[0]&&'static'}}>
                            Вариант 1
                        </div>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[1], 'geniusQuoteDad', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[1]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[1]&&'static'}}>
                            Вариант 2
                        </div>
                    </div>

                    <div className="flex flex-center" style={{marginTop:'15px'}}>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[2], 'geniusQuoteDad', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[2]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[2]&&'static'}}>
                            Вариант 3
                        </div>
                        <div onClick={()=>
                            
                                actions.builderInput(quote[3], 'geniusQuoteDad', 'textarea')
                            }
                            styleName="text-variants"
                            style={{background:form.textarea.value===quote[3]&&'rgb(88, 119, 255)',
                                    position:form.textarea.value===quote[3]&&'static'}}>
                            Вариант 4
                        </div>
                    </div>
            
            <div style={{ padding: 15, paddingTop: 30 }}>

                <TextArea
                    placeholder="Типичная фраза..."
                    field={form.textarea}
                    maxLength={100}
                    style={{height:'10vh'}}
                    fieldType={"geniusQuoteDad"}
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
