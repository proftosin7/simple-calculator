import React from "react";
import { NavLink } from "react-router-dom";

function Convert() {
  return (
    <div className="calculator">
      <div className="c-wrapper">
        {" "}
        <div>
          <div className="ctc c-type">
            <li>
              <NavLink to="/" exact>
                <button className="active">Calculator</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/converter" exact>
                <button className="">Converter</button>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;
