import React from 'react'
import './about.css'
import url from '../../entry/url'
import Footer from '../home/components/footer'
const Img1 = `${url}/images/price-small.jpg`
const Img2 = `${url}/images/price-big.jpg`
const Img3 = `${url}/images/price-small-hard.jpg`
const Img4 = `${url}/images/price-big-hard.jpg`
export default (props)=>(
    <div styleName="page">
        <div styleName="section">
            <div styleName="img img-1" style={{background:`url(${url}/images//product1.jpg)`}}>
            </div>
            <div styleName="description right first" style={{paddingTop:'1.5em'}}>
                <div styleName="title">Подарите уникальную, персонализированную книгу</div>
                <div styleName="text">
                    Наш продукт - уникальный и интересный подарок на всю жизнь. Как это работает? Заполните небольшую форму и наш сайт создаст
                    красочную книгу, отобрав из более миллиона интереснейших фактов о главном герое и его времени.
                    В процессе создания вы можете добавлять фото, пожелания и текст, которые в сочитании с ярким дизайном,
                    создадут подарок, который еще никто не получал.
                </div>
            </div>
        </div>
        <div styleName="section">
            <div styleName="description">
                <div styleName="title">Памятный подарок на всю жизнь</div>
                <div styleName="text">
                    Книги от 'bookfrom.me' печатаются в лучших типографиях страны. Обложка и страницы выполнены из высококачественной
                    бумаги, что приятна на ощупь и вид. Обложка защищена от попадания грязи и других неприятных последствий.
                    Подарок, сделаный нами, будет радовать получателя на протяжении всей его жизни.
                 </div>
            </div>
            <div styleName="img img-2" style={{background:`url(${url}/images//product2.jpg)`}}>
            </div>
        </div>
        <div styleName="section">
            <div styleName="img img-3" style={{background:`url(${url}/images//product3.jpg)`}}>
            </div>
            <div styleName="description right">
                <div styleName="title">Мягкий и твердый формат книги в разном размере</div>
                <div styleName="text">
                    Книги доступны в мягкой и твердой обложке и варируются от 19см х 19см до 23см х 23см.
                    Данные форматы смотрятся ярко и удобны для чтения с близкими.
                </div>
            </div>
        </div>
        <div styleName="section-price">
            <div styleName="item">
                <div styleName="price-img">
                    <img src={Img1} alt=""/>
                </div>
                <div styleName="price-text">
                    <div styleName="price-desc">
                        Мягкая обложка <br/> 19см х 19см
                    </div>
                    <div styleName="price">9900 тг</div>
                </div>
            </div>
            <div styleName="item">
                <div styleName="price-img">
                    <img src={Img2} alt=""/>
                </div>
                <div styleName="price-text">
                    <div styleName="price-desc">
                        Мягкая обложка <br/> 23см х 23см

                    </div>
                    <div styleName="price">11900 тг</div>
                </div>
            </div>
            <div styleName="item">
                <div styleName="price-img">
                    <img src={Img3} alt=""/>
                </div>
                <div styleName="price-text">
                    <div styleName="price-desc">
                        Твердая обложка <br/> 19см х 19см
                    </div>
                    <div styleName="price">14900 тг</div>
                </div>
            </div>
            <div styleName="item">
                <div styleName="price-img">
                    <img src={Img4} alt=""/>
                </div>
                <div styleName="price-text">
                    <div styleName="price-desc">
                        Твердая обложка <br/> 23см х 23см
                    </div>
                    <div styleName="price">16900 тг</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

)