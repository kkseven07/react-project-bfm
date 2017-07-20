import React from 'react'
import './index.css'
import {Input, Button, TextArea} from '../shared'
import Footer from '../home/components/footer'
import Form from './components/form'
import Modal from '../modal/route_modal/index'

export default (props)=>{

  return <div >
  <Modal />
    <div styleName="App">
      <div styleName="part1">
        <div styleName="title">НАШИ КОНТАКТЫ</div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-map-marker"></i></div>
          <div styleName="item-text">Байзакова 280, Almaty Towers, Алматы, Казахстан</div>
        </div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-phone"></i></div>
          <div styleName="item-text">+7 707 23 01 555, +7 707 961 76 98</div>
        </div>
        <div styleName="item">
          <div styleName="icon"><i className="fa fa-envelope"></i></div>
          <div styleName="item-text" style={{textTransform:'initial'}}>team.bookfrom.me@gmail.com</div>
        </div>
      </div>
      <div styleName="part2">
        <Form />
        
        <div styleName="map">
          <iframe
            style={{border:0,frameBorder:0, width:'100%', height:'100%' }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDLlaQgld5094_h5m3PnyIY77XqaXU0ZIE
              &q=Алматы+Тауэрс, Байзакова+280" >
          </iframe>
        </div>
      </div>
    </div>
    <Footer history={props.history}/>
  </div>
}
