import React from "react";
import Confetti from "react-confetti";
import Book from "./book";
import {Button} from '../../shared'

export default ({ book, actions }) => {
    const cover = book.cover;
    const rest = book.book;
    return (
        <div
            style={{ minHeight: 500, justifyContent:"flex-start" }}
            className="flex flex-center flex-column"
        >
            <Confetti />
            <div style={{ fontFamily: "RobotoMedium", fontSize: 20 }}>
                Поздравляем!
            </div>
            <div
                style={{
                    fontFamily: "RobotoMedium",
                    marginTop: 3,
                    fontSize: 20
                }}
            >
                Вы только что создали:{" "}
            </div>
            <Book book={rest} cover={cover} />

            <div
                style={{
                    fontFamily: "RobotoRegular",
                    marginTop: 20,
                    fontSize: 18
                }}
            >
                У некоторых страниц есть кнопка
            </div>
            <div
               className="flex flex-center"
               style={{
                   marginTop:10
               }}
           >
               Редактировать
           </div>
             <div
                style={{
                    fontFamily: "RobotoRegular",
                    marginTop: 10,
                    fontSize: 18,
                    width:300,
                    textAlign:"center"
                }}
            >
                Нажав на которую вы сможете персонализировать книгу
            </div>
            <div style={{height:25}}/>
            <Button click={()=>actions.closeModal()}>
                Перейти к книге
            </Button>

        </div>
    );
};
