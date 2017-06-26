import React from "react";
import Text from "./text";
import './brain.css'
import { Input, Select, Button } from "../../../shared";
import { toSave } from "../utils";
import Buttons from "./buttons";
export default ({ page, book, actions, form }) => {

	// const update = toSave(form);
	const text = form.input.value;
	const text1 = form.input1.value;
    const text2 = form.input2.value;

    return (
        <div className="flex flex-column width-full">

			<Text>Напишите химическую формулу любви вашей мамы!</Text>
			 <div style={{ padding: 15, paddingTop: 0 }} styleName="thoughts">

                <Input
                    placeholder={"забота"}
                    field={form.input}
                    maxLength={20}
                    fieldType={"formulaMom"}
                    enter={actions.builderInput}
                />
                <Input
                    placeholder={"мудрость"}
                    builderField={"input1"}
                    field={form.input1}
                    maxLength={20}
                    fieldType={"formulaMom"}
                    enter={actions.builderInput}
                />
                <Input
                    placeholder={"советы"}
                    field={form.input2}
                    builderField={"input2"}
                    maxLength={20}
                    fieldType={"formulaMom"}
                    enter={actions.builderInput}
                />
            </div>
            <Buttons
            	close={actions.closeModal}
            	onSave={() => actions.updatePage(page, {text1, text, text2})}/>
        </div>
    );
};
