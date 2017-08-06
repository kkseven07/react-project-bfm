import React from "react";
import url from "../../../entry/url";
import Gallery from "react-grid-gallery";
import "./images.css";
const Image1 = `${url}/images/g1.jpg`;
const Image2 = `${url}/images/g2.jpg`;
const Image3 = `${url}/images/g3.jpg`;
const Image4 = `${url}/images/g4.jpg`;
const Image5 = `${url}/images/g5.jpg`;
const Image6 = `${url}/images/g6.jpg`;
const Image7 = `${url}/images/g7.jpg`;
const Image8 = `${url}/images/g8.jpg`;
const Image9 = `${url}/images/g9.jpg`;
const Image10 = `${url}/images/product2.jpg`;
const Image11 = `${url}/images/g10.jpg`;
const b1 = `${url}/images/b1.jpg`;
const b2 = `${url}/images/b2.jpg`;
const b3 = `${url}/images/b3.jpg`;
const b4 = `${url}/images/b4.jpg`;
const b5 = `${url}/images/b5.jpg`;
const b6 = `${url}/images/b6.jpg`;
const b7 = `${url}/images/b7.jpg`;
const b8 = `${url}/images/b8.jpg`;
const m1 = `${url}/images/m1.jpg`;
const m2 = `${url}/images/m2.jpg`;
const IMAGES = [
    {
        src: b1,
        thumbnail: b1,
        thumbnailWidth: 420,
        thumbnailHeight: 300,
        caption: "Узнайте, какие исторические события произошли в Ваш день рождения"
    },
    // {
    //     src: b6,
    //     thumbnail: b6,
    //     thumbnailWidth: 320,
    //     thumbnailHeight: 300,
    //     caption: "After Rain (Jeshu John - designerspics.com)"
    // },
    {
        src: b2,
        thumbnail: b2,
        thumbnailWidth: 420,
        thumbnailHeight: 300,
        caption: "Выберите один из 6 цветов для своей обложки и создайте свою уникальную книгу"
    },
    {
        src: Image3,
        thumbnail: Image3,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Жандос Айбасов выбирает нашу книгу"
    },
    {
        src: m1,
        thumbnail: m1,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "А еще можно порадовать родителей!"
    },
    {
        src: Image4,
        thumbnail: Image4,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Артур просто в восторге от нашей книги"
    },
    {
        src: b3,
        thumbnail: b3,
        thumbnailWidth: 420,
        thumbnailHeight: 300,
        caption: "Удобные размеры для чтения вместе с родными и друзьями"
    },
    {
        src: b4,
        thumbnail: b4,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Подарок, который будет радовать вас на протяжении всей жизни"
    },
    {
        src: b5,
        thumbnail: b5,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "Узнайте, какие песни слушали ваиш родители и какие сладости были популярны в год Вашего рождения"
    },

    {
        src: Image1,
        thumbnail: Image1,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Марлен рекомендует нашу книгу всем своим друзьям"
    },
    {
        src: m2,
        thumbnail: m2,
        thumbnailWidth: 290,
        thumbnailHeight: 300,
        caption: "Читаем с коллегами"
    },
    {
        src: Image5,
        thumbnail: Image5,
        thumbnailWidth: 290,
        thumbnailHeight: 300,
        caption: "Майя Акишева заказала книгу для своей близкой подруги"
    },

    {
        src: Image8,
        thumbnail: Image8,
        thumbnailWidth: 420,
        thumbnailHeight: 300,
        caption: "Подарочная упаковка сделанная с любовью"
    },
    {
        src: Image9,
        thumbnail: Image9,
        thumbnailWidth: 420,
        thumbnailHeight: 300,
        caption: "Наши книги чертовски приятны на ощупь"
    },
    {
        src: Image6,
        thumbnail: Image6,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Лучше одной книги может быть только две!"
    },
    {
        src: Image7,
        thumbnail: Image7,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Счастливчик Виталий, победивший в конкурсе"
    },
    // {
    //     src: Image10,
    //     thumbnail: Image10,
    //     thumbnailWidth: 420,
    //     thumbnailHeight: 300,
    //     caption: "After Rain (Jeshu John - designerspics.com)"
    // },
    {
        src: Image11,
        thumbnail: Image11,
        thumbnailWidth: 210,
        thumbnailHeight: 300,
        caption: "Наши книги рекомендуются абсолютно всем возрастам"
    },
    {
        src: b7,
        thumbnail: b7,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Лучший подарок, чтобы завоевать сердце любой девушки"
    },
    {
        src: b8,
        thumbnail: b8,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: "Читаем с друзьями"
    }
];
export default props => {
    return (
        <div style={{ width: "100%", padding: "2%" }}>
            <div style={{ fontFamily: "BebasBold", margin: 10, fontSize: 40, marginBottom:20}}>
                ФОТОГАЛЕРЕЯ

            </div>
            <Gallery margin={2} enableImageSelection={false} images={IMAGES} />
        </div>
    );
};
