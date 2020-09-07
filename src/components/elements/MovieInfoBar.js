import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { calcTime, convertMoney } from "../../helpers";

import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="GlobalContainer">
      <div className="itemss">
        <div className="itemm">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <h4>
            {" "}
            Running time : <span>{calcTime(time)}</span>
          </h4>
        </div>
        <div className="itemm">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <h4>
            {" "}
            Budget : <span>{convertMoney(budget)}</span>
          </h4>
        </div>
        <div className="itemm">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <h4>
            Revenue : <span>{convertMoney(revenue)}</span>
          </h4>
        </div>
      </div>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
