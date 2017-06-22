import React from 'react'
import './index.css'
import {Input, Button, TextArea} from '../shared'
import Footer from '../home/components/footer'
export default (props)=>{

  return <div >
    <div styleName="App">
      <div styleName="part1">
        <div styleName="title">НАШИ КОНТАКТЫ</div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-map-marker"></i></div>
          <div>Байзакова 280, Almaty Towers, Алматы, Казахстан</div>
        </div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-phone"></i></div>
          <div>+7 708 191 45 54</div>
        </div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-envelope"></i></div>
          <div>team.bookfrom.me@gmail.com</div>
        </div>
      </div>
      <div styleName="part2">
        <div styleName="form">
          <div style={{textAlign:'center', fontFamily:'RobotoMedium'}}>НАПИШИТЕ НАМ</div>
          <div style={{width:'100%', paddingBottom:'20px'}}>
            <div styleName="form-item"><Input placeholder="Ваше имя" field="go"/></div>
            <div styleName="form-item"><Input placeholder="Ваш email" field="go"/></div>
            <div styleName="form-item"><TextArea style={{height:'180px'}} placeholder="Ваше сообщение" field="go"/></div>

          </div>
          <Button>Отправить</Button>
        </div>
        <div styleName="map">
          <iframe
            style={{border:0,frameBorder:0, width:'100%', height:'100%' }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDLlaQgld5094_h5m3PnyIY77XqaXU0ZIE
              &q=Алматы+Тауэрс, Байзакова+280" >
          </iframe>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}