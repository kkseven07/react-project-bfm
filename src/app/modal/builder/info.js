import React from "react";
import Confetti from 'react-confetti'
export default ({ book, actions }) => {
    return (
        <div style={{ minHeight: 600 }} className="flex flex-center">
            Поздравляем!!! Вы только что создали книгу {book.name}
             <Confetti />
        </div>
    );
};
