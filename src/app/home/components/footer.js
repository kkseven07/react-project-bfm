import React from 'react'
import './footer.css'
// import Logo from '../../../../assets/img/logo monochr.png'
import url from "../../../entry/url";
import * as actions from "../../../business/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const Footer  =(props)=>{

    console.log("actions", props.scroll)
    return <div className="width-full flex" styleName="r">
        <div styleName="part1" className="flex">
            <div styleName=" col" className="flex" >
                <ul>
                    <li style={{color:'#ed2626'}}>О продукте</li>
                    <li><div onClick={()=> 
                            {
                                props.actions.setupBookType("you");
                                props.scroll();
                                
                            }}
                        >Книга о тебе</div></li>
                    <li><div onClick={()=> 
                            {
                                props.actions.setupBookType("dad");
                                props.scroll();
                                
                            }}
                        >Книга отца</div></li>
                    <li><div onClick={()=> 
                            {
                                props.actions.setupBookType("mom");
                                props.scroll();
                                
                            }}
                        >Книга матери</div></li>
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
                    <li><div>Контакты</div></li>
                    <li><div onClick={()=>props.actions.openRouteModal("shipping")}>Доставка</div></li>
                    <li><div onClick={()=>props.actions.openRouteModal("return")}>Возврат</div></li>
                    <li><div onClick={()=>props.actions.openRouteModal("payment")}>Оплата</div></li>
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
                <img src={`${url}/images/logo_mono.png`} alt="" style={{width:'100px', height:'100px', display:'block'}}/>
            </div>
            <div styleName="copyright">
                2017 © bookfrom.me — подари незабываемый подарок. Все права защищены. Доставка по всему Казахстану. Попытка взлома данной системы плохо влияет на вашу карму.
            </div>
        </div>


    </div>
}
const mapStateToProps = state => ({
    scroll:state.init.scroll
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
