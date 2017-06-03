import React from "react";
export default ({
    field,
    enter,
    ...props
}) => {
    return (
        <textarea
            onChange={e => enter(e.target.value, props.fieldType,"textarea")}
            style={props.style}
            className="enter"
            maxLength={props.maxLength}

            value={field.value}
            placeholder={props.placeholder}
        />
    );
};