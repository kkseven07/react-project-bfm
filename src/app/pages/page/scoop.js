import React, { Component } from "react";
import "./scoop.css";

class Scoop extends Component {
  render() {
    let { facts, year } = this.props.data;
    let first = facts.first;
    let second = facts.second;

    return (
      <div className="full" styleName="r">
        <div className="flex-center" styleName="empty">
          <div styleName="year-text">{year} год</div>
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

        <div className="flex-center" styleName="second">
          <ul style={{ marginRight: 5 }}>
            {second.map((fact, i) => <li styleName="li" key={i}> {fact}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Scoop;
