import {
    Button,
    Input,
    Select,
    ErrorText,
    DescText,
    DescSmall,
    TextArea
} from "../../shared";
import "./form.css";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../business/actions";
const contactForm =({form, actions} ) => {
    return (
        <div styleName="form">
          <div style={{textAlign:'center', fontFamily:'RobotoMedium'}}>НАПИШИТЕ НАМ</div>
          <div style={{width:'100%'}}>
                <div styleName="form-item">
                    <Input
                        maxLength={50}
                        placeholder="Имя"
                        field={form.name}
                        fieldType={"name"}
                        enter={actions.contactInput}
                    />
                </div>
                <div style={{ padding: 5, paddingLeft: 0 }}>
                    <ErrorText text={form.name.errorText} />
                </div>
                
                <div styleName="form-item">
                    <Input
                        placeholder="email@email.com"
                        field={form.email}
                        maxLength={50}
                        fieldType={"email"}
                        enter={(actions.emailContactInput)}
                        onBlur={actions.contactInput}
                    />
                </div>
                <div style={{ padding: 5, paddingLeft: 0 }}>

                    <ErrorText text={form.email.errorText} />
                </div>

                
                <div styleName="form-item">
                    <TextArea
                        placeholder="Ваше сообщение"
                        field={form.text}
                        maxLength={400}
                        fieldType={"text"}
                        enter={actions.contactInput}
                        style={{height:'180px'}}
                    />
                </div>
                <div style={{ padding: 5, paddingLeft: 0 }}>
                    <ErrorText text={form.text.errorText} />
                </div>
                
            </div>
            {form.status&&<div style={{fontSize:'0.8em', color:'#24a124'}}>
                    Сообщение успешно доставлено. <br/> Мы обязательно прочитаем и ответим в случае необходимости.
                </div>}
            <Button click={()=> actions.validateContactForm()}>Отправить</Button>
        </div>
    );
};
const mapStateToProps = state => ({
    form: state.contactForm
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(contactForm);