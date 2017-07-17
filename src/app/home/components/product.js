import React from 'react'
import './product.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import url from "../../../entry/url";
const Image1 =`${url}/images/product1.jpg`
const Image2 =`${url}/images/product2.jpg`
const Image3 =`${url}/images/product3.jpg`



const text = [
  'Мы хотим, чтобы наша книга дарила вам много радости, поэтому создавали все концепты с большой любовью! У вас есть уникальная возможность подарить персонализированную книгу дорогому вам человеку и принять участие в ее создании. Это занимает несколько минут, но дарит яркие и незабываемые впечатления на всю жизнь!',
  'Наши книги печатаются в лучших типографиях города, поэтому она не только волшебна по содержанию, но невероятно приятна на ощупь и доставляется в особой оберточной бумаге.',
  'Размер наших книг варируется от 19см х 19 см до 23см х 23 см, как в мягком, так и в твердом переплете',
  'Цена на книгу начинается от 9900тг и до 17900тг'
]
const images =[Image1, Image2, Image3]
const headers =[
  'Подари уникальную, персонализированную книгу', 
  'Памятный подарок на всю жизнь', 
  'Идеальный размер чтобы радовать глаз',
  ''
]
class Review extends React.Component {
  state = {count: 0}
  changeTab =(count)=> {
    this.setState({
      count:count
    })
  }

  render () {
    return (
        <div styleName="r" >
          <div styleName="first">
            <div styleName="tabs">
              <div styleName="tab" onClick={()=>this.changeTab(0)} style={{backgroundColor:this.state.count===0&&'white'}}>
                Уникальность
              </div>
              <div styleName="tab" onClick={()=>this.changeTab(1)} style={{backgroundColor:this.state.count===1&&'white'}}>
                Качество
              </div>
              <div styleName="tab" onClick={()=>this.changeTab(2)} style={{backgroundColor:this.state.count===2&&'white'}}>
                Размеры
              </div>

            </div>
            <div styleName="anim2">
              <ReactCSSTransitionGroup
                  transitionName="animation2"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>
                  <div styleName="content"style={{position:'absolute', padding:'1%'}}key={this.state.count}>
                    <div styleName="title" style={{fontSize:'1.9em', margin:'1.1rem 0'}}>{headers[this.state.count]}</div>
                    <div styleName="text">{text[this.state.count]}</div>
                  </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>

          <div styleName="second">
            <div styleName="anim" style={{position:'relative', width:'100%', height:'100%'}}>
              <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={700}
                  transitionLeaveTimeout={720}>
                  <div styleName="imgs" key={this.state.count+100}>
                    <img style={{width:'100%', height:'100%', display:'block'}} src={images[this.state.count]} key={this.state.count}/>
                  </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
    )
  }
}
export default Review;