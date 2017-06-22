import React from "react";
import "./ageFact.css";

const parseText = (age, fact, i) => {
    let first, last, index;
    if (fact.indexOf(age) > -1) {
        index = fact.indexOf(age);
        first = fact.substring(0, index);
        last = fact.substring(index + 2, fact.length);
    }
    return fact.indexOf(age) > -1
        ? <span key={i} styleName="facts">
              {first}
              <span style={{ fontSize: '1.4em' }}>
                  {"  " + age + " "}
              </span>
              {last + ". "}
          </span>
        : <span key={i} styleName="facts">{fact}</span>;
};

export default ({ page, book }) => (
    <div className="full" styleName="r">
        <div styleName="text">{book.age}</div>

        <div styleName="box2">
            <span>{page.data.facts.map((fact, i) => parseText(book.age, fact, i))}</span>
        </div>

    </div>
);
