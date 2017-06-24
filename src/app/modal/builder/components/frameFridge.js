import React from "react";
import Text from "./text";
import { Input, Select, TextArea } from "../../../shared";
import Buttons from "./buttons";
import Drop from "./Drop";
class FrameFridge extends React.Component {
    upload = () => {
        this.drop.upload();
    };
    render() {
        const { book, page, actions, form } = this.props;
        const text = form.textarea.value;
        return (
            <div>

                <Text>Загрузите фотографию</Text>
                <Drop
                    ref={el => (this.drop = el)}
                    book={book}
                    page={page}
                    upload={actions.upload}
                />
                <Text>Добавьте описание к фотографии</Text>
                <div
                    style={{ padding: 15, paddingBottom: 10 }}
                    className="flex flex-center"
                >

                    <TextArea
                        field={form.textarea}
                        fieldType={"framefridge"}
                        enter={actions.builderInput}
                        style={{ height: "100px", width: "70%" }}
                        maxLength={60}
                    />
                </div>
                <Buttons
                    onSave={() => {
                        actions.updatePage(page, { text });
                        this.upload();
                    }}
                    close={this.props.actions.closeModal}
                />

            </div>
        );
    }
}
export default FrameFridge;
