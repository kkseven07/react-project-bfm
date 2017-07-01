import React from "react";
export default ({ type, actions}) => {
    return (
        <div className="flex flex-column width-full" style={{padding:'0.2em'}}>
           <div style={{fontSize:'1.6em'}}>
               Политика возврата
           </div>
            <div style={{fontFamily:'RobotoRegular', fontSize:'0.7em', padding:'20px 0', lineHeight:'1.3'}}>
                В книгах, созданных 'bookfrom.me', собрано множество интереснейших, увлекательных и персонализированных данных
                о получателе и всего, что его окружало в течение жизни. Создавая уникальный подарок, мы стараемся угодить каждому человеку. 
                Таким образом, книга является именной и может быть подарена одному человеку. По этой причине товар возврату не подлежит.  
            </div>
        </div>
    );
};
