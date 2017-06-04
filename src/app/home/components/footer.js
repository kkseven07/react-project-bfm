import React from 'react'
import './footer.css'
import Logo from '../../../../assets/img/logo monochr.png'

export default (props)=>{


    return <div className="width-full flex" styleName="r">
        <div styleName="part1" className="flex">
            <div styleName=" col" className="flex" >
                <ul>
                    <li style={{color:'#ed2626'}}>О продукте</li>
                    <li><a href="">Книга о тебе</a></li>
                    <li><a href="">Детская Книга</a></li>
                    <li><a href="">Книга матери</a></li>
                    <li><a href="">Цены</a></li>
                </ul>
            </div>
            <div styleName="col" className="flex">
                <ul>
                    <li>BookFromMe</li>
                    <li><a href="">Наша история</a></li>
                    <li><a href="">Дизайн</a></li>
                    <li><a href="">Сотрудники</a></li>
                </ul>
            </div>
            <div styleName="col" className="flex">
                <ul>
                    <li style={{color:'#4563fe'}}>Помощь</li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Доставка</a></li>
                    <li><a href="">Возврат</a></li>
                </ul>
            </div>

        </div>
        <hr style={{width:'80%'}}/>
        <div styleName="part2" className="flex">
            <div styleName="socials col">
                <a target="_blank" href="https://www.vk.com/bookfromme1"><i className="fa fa-vk" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.facebook.com/groups/127022191201481/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.instagram.com/bookfromme/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a target="_blank" href="https://twitter.com/bookfromme"><i className="fa fa-twitter" aria-hidden="true"></i></a>

            </div>
            <div styleName="logo">
                <img src={Logo} alt="" style={{width:'100px', height:'100px', display:'block'}}/>
            </div>
            <div styleName="copyright">
                2017 © bookfrom.me — подари незабываемый подарок. Все права защищены. Доставка по всему Казахстану. Попытка взлома данной системы плохо влияет на вашу карму.
            </div>
        </div>


    </div>
}