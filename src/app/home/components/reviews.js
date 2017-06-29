import React, {Component} from 'react'
import './reviews.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import url from "../../../entry/url";





const revText = [
            'Очень хорошая книга! Узнал об этом продукте, увидев красивый рекламный ролик. Решил подарить всей семье. Все остались в восторге!!!',
            'Не знала что подарить другу не день рождения и случайно наткнулась на "BookFromMe". Процесс создания книги и предомсмотр не могут не радовать! Так же порадовала быстрая доставка.',
            'Отличный подарок всей семье и друзьям. Покупал сам себе ибо лучше друга, чем ты сам, нет!',
            'Отличный подарок! Купил сестренке, она была очень довольна. Собираюсь купить еще несколько книг друзьям!'
            ]
const revPhoto = [
                  `${url}/images/rev1.png`,
                  `${url}/images/rev2.jpg`,
                  `${url}/images/rev3.jpg`,
                  `${url}/images/rev4.jpeg`
                  ]
const revAuthor = ['Алексей', 'Алина', 'Максим', 'Игорь']
let vr = "count"
class Review extends React.Component {
      state = {count1:0, count2:1, count3:2}
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      componentDidMount() {
         this.startTimer()
      }
      dsa () {
        this.setState({
            count1: (this.state.count1 + 1),
            count2: (this.state.count2 + 1),
            count3: (this.state.count3 + 1)
        })
        if (this.state.count1===revAuthor.length) this.setState({count1: 0})
        if (this.state.count2===revAuthor.length) this.setState({count2: 0})
        if (this.state.count3===revAuthor.length) this.setState({count3: 0})



}

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.dsa.bind(this), 15000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }


  render () {

    return (
        <div styleName="r" className="flex">
          <h2 style={{textAlign:'center'}}>Отзывы</h2>
          <div styleName="revs">
            <div styleName="animated-review" className="flex">
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container" >
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count1]} key={this.state.count1}/>
                        </div>
                        <div styleName="review">
                          <div styleName="review-author">{revAuthor[this.state.count1]}</div>
                            <div styleName="review-text">{revText[this.state.count1]}</div>

                        </div>

                    </div>
                 </ReactCSSTransitionGroup>
            </div>

            <div styleName="animated-review" >
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container"  >
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count2]} key={this.state.count2}/>
                        </div>
                        <div styleName="review">
                          <div styleName="review-author">{revAuthor[this.state.count2]}</div>
                            <div styleName="review-text">{revText[this.state.count2]}</div>

                        </div>



                    </div>
                 </ReactCSSTransitionGroup>
            </div>

            <div styleName="animated-review" className="flex">
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container"  >
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count3]} key={this.state.count3}/>
                        </div>
                        <div styleName="review">
                          <div styleName="review-author">{revAuthor[this.state.count3]}</div>
                            <div styleName="review-text">{revText[this.state.count3]}</div>

                        </div>

                    </div>
                 </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
    )
  }
}
export default Review;