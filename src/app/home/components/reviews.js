import React, {Component} from 'react'
import './reviews.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import rev1 from './../../../../assets/reviewers/rev1.jpeg'
import rev2 from './../../../../assets/reviewers/rev2.jpeg'
import rev3 from './../../../../assets/reviewers/rev3.jpeg'
import rev4 from './../../../../assets/reviewers/rev4.jpeg'




const revText = [
            'Очень хорошая книга! Узнал об этом продукте, увидев красивый рекламный ролик. Решил подарить всей семье. Все остались в восторге!!!',
            'Не знала что подарить другу не день рождения и случайно наткнулся на "BookFromMe". Процесс создания книги и предомсмотр не могут не радовать! Так же порадовала быстрая доставка.',
            'Отличный подарок всей семье и друзьям. Покупал сам себе ибо лучше друга, чем ты сам, нет!',
            'Крутой подарок! Купил сестренке, она была очень довольна. Собираюсь купить еще несколько книг друзьям!'
            ]
const revPhoto = [rev1, rev2, rev3, rev4]
const revAuthor = ['Ильяс', 'Бинур', 'Абай', 'Аян']

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
    this.timer = setInterval(this.dsa.bind(this), 10000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  render () {
    return (
        <div styleName="r">
            <div styleName="animated-review" className="flex">
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container" key={this.state.count1} className="flex">
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count1]} key={this.state.count1}/>
                        </div>
                        <div styleName="review">
                            <div styleName="review-text">{revText[this.state.count1]}</div>
                            <div styleName="review-author">{revAuthor[this.state.count1]}</div>
                        </div>

                    </div>
                 </ReactCSSTransitionGroup>
            </div>

            <div styleName="animated-review" >
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container" key={this.state.count2} className="flex">
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count2]} key={this.state.count2}/>
                        </div>
                        <div styleName="review">
                            <div styleName="review-text">{revText[this.state.count2]}</div>
                            <div styleName="review-author">{revAuthor[this.state.count2]}</div>
                        </div>



                    </div>
                 </ReactCSSTransitionGroup>
            </div>

            <div styleName="animated-review" className="flex">
                <ReactCSSTransitionGroup
                  transitionName="animation"
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={600}>

                    <div styleName="review-container" key={this.state.count3} className="flex">
                        <div styleName="review-photo">
                            <img src={revPhoto[this.state.count3]} key={this.state.count3}/>
                        </div>
                        <div styleName="review">
                            <div styleName="review-text">{revText[this.state.count3]}</div>
                            <div styleName="review-author">{revAuthor[this.state.count3]}</div>
                        </div>

                    </div>
                 </ReactCSSTransitionGroup>
            </div>
        </div>
    )
  }
}
export default Review;