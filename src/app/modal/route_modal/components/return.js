import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div >
               Политика возврата
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0'}}>
                Товар 'bookfrom.me' является уникальным для каждого человека. По этой причине книги возврату не подлежат.  
            </div>
        </div>
    );
};
