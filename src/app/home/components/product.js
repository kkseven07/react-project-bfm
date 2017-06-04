import React from 'react'
import './product.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Image1 from '../../../../assets/img/product1.jpg'
import Image2 from '../../../../assets/img/product2.jpg'
import Image3 from '../../../../assets/img/product3.jpg'
import Image4 from '../../../../assets/img/product2.jpg'



const text = [
  'Потратьте пять минут и создайте уникальную книгу. Наш продукт - единственный в своем роде. Никто в мире еще не получал такого подарка.',
  'Книги  печатаются в лучших типографиях города и выполнены из качественной, приятной на ощупь, бумаги',
  'Размер наших книг варируется от 21см х 21 см до 24см х 24 см, как в мягком, так и в твердом переплете',
  'Цена на книгу начинается от 9900тг и до 17900тг'
]
const images =[Image1, Image2, Image3, Image4]
const headers =['Подари уникальную, персонализированную книгу', 'Памятный подарок на всю жизнь', 'Идеальный размер чтобы радовать глаз','']
class Review extends React.Component {
  state = {count: 0}
  changeTab =(count)=> {
    this.setState({
      count:count
    })
  }

  render () {
console.log(this.state.count)
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
              <div styleName="tab" onClick={()=>this.changeTab(3)} style={{backgroundColor:this.state.count===3&&'white'}}>
                Цены
              </div>
            </div>
            <div styleName="anim2">
              <ReactCSSTransitionGroup
                  transitionName="animation2"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>
                  <div style={{position:'absolute', padding:'1%'}}key={this.state.count}>
                    <div style={{fontSize:'1.9em', margin:'1.1rem 0'}}>{headers[this.state.count]}</div>
                    <div styleName="text">{text[this.state.count]}</div>
                  </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>

          <div styleName="second">
            <div styleName="anim" style={{position:'relative', width:'100%'}}>
              <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  <div styleName="imgs" style={{position:'absolute'}}key={this.state.count+100}>
                    <img style={{width:'100%', height:'50%'}} src={images[this.state.count]} key={this.state.count}/>
                  </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
    )
  }
}
export default Review;