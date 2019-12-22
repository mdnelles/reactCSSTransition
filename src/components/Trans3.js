
import React, { useState } from 'react';
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import "../Trans3.css";

export const Trans3 = () => {
    const [showList, setShowList] = useState(true)
    const [highlightedHobby, setHighlightedHobby] = useState(false)
  
    const doSwitch = () => setShowList(!showList)

    const listSwitch = () => setHighlightedHobby(!highlightedHobby)
  

    return (
      <div className="container">
        <button className="display" onClick={doSwitch}> Obinna</button>
        <CSSTransition
          in={showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={listSwitch}
          onExit={listSwitch}
        >
          <div className="list-body">
            <ul className="list">
              <li
                className={cx("list-item", {
                  "list-item--active": highlightedHobby
                })}
              >
                Writing JavaScript
              </li>
              <li className="list-item"> Running</li>
              <li className="list-item"> Technical Writing</li>
              <li className="list-item"> Writing Clean code</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  
}

