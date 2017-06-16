import React from "react";
import "./input.css";
import { fieldStyle } from "../utils";

export default ({
    field,
    enter,
    ...props
}) => {
    return (
        <input
            onChange={e => enter(e.target.value, props.fieldType,props.builderField?props.builderField:"input")}
            className={fieldStyle(field.isPristine, field.isValid)}
            styleName={props.style || ""}
            type="text"
            maxLength={props.maxLength}
            value={field.value}
            placeholder={props.placeholder}
            onBlur={e =>props.onBlur&&props.onBlur(e.target.value, props.fieldType,props.builderField?props.builderField:"input")}
        />
    );
};