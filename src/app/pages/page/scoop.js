import React, { Component } from "react";
import "./scoop.css";

class Scoop extends Component {
  dropFact =(array, maxLen)=> {
    let len=0, min=100, minIndex=0;

    for(let i=0;i<array.length;i++) {
      len+=array[i].length;
      if (array[i].length<min && array[i].length>40)  {
        min = array[i].length
        minIndex=i;
      }
    }
    if (len> maxLen) {
       return array.splice(minIndex, 1);
    }
    else {
      return array;
    }

}

  render() {

    let { facts, year } = this.props.data;
    let first = facts.first;
    let second = facts.second;
    const firstMaxLength=530,secondMaxLength=670;
    this.dropFact(first,firstMaxLength);
    this.dropFact(second,secondMaxLength);
    return (
      <div className="full" styleName="r" style={{width:this.props.print&&'98%', height:this.props.print&&'95%'}}>
        <div className="flex-center" styleName="empty">

          <div styleName="year-text" style={{top:this.props.print&&'17.2%'}}> Общий сбор новостей за {year} год</div>

        </div>

        <div className="flex-center" styleName="first">
          <ul>
            {first.map((fact, i) => (
              <li styleName="li" key={i}>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div styleName="second">
          <ul style={{ marginRight: 5 }}>
            {second.map((fact, i) => <li styleName="li" key={i}> {fact}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Scoop;
