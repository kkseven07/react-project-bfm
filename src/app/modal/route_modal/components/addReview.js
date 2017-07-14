import React from "react";
import Form from '../../../contacts/components/form.js'
import './addReview.css'
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full flex-center" style={{padding:'0.2em', fontSize:'0.7em'}}>
          <div style={{fontSize:'1.9em', marginBottom:'20px'}}>Оставьте ваш отзыв, станьте частью истории!</div>
          <Form />
        </div>
    );
};
