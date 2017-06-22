import React from "react";
import Text from "./text";
import { Input, Select } from "../../../shared";
import Buttons from './buttons'
import Drop from './Drop'
class PastPhoto extends React.Component {
    upload = ()=>{
        this.drop.upload()
    }
    render() {
        const {book, page, actions} = this.props
        return (
            <div>

                <Text>Загрузите фотографию</Text>
                <Drop ref={el=>this.drop=el}  book={book} page={page} upload={actions.upload}/>
                <Buttons
                    onSave={this.upload}
                    close={this.props.actions.closeModal}
                />
            </div>
        );
    }
}
export default PastPhoto;
