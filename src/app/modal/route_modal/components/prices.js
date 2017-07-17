import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div style={{fontSize:'1.6em'}}>
               Цены
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0', lineHeight:'2'}}>
                <div>Твердый переплет 19см х 19см: <strong>14900</strong> тг.  </div>
                <div>Твердый переплет 23см х 23см: <b>16900</b> тг.  </div>
                <div>Мягкий переплет 19см х 19см: <b>9900</b> тг.  </div>
                <div>Мягкий переплет 23см х 23см: <b>11900</b> тг. </div>
                <div>Электронная версия PDF: <b>2900</b> тг. </div>
                <div>
                  <a 
                    href="https://www.bookfrom.me/about"
                    style={{textDecoration:'underline'}}
                  >Дополнительная информация о ценах и продукте.</a>
                </div>
            </div>
        </div>
    );
};
