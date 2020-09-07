import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

function getHeading(header) {
  return header ? (
    <h1>
      Search Result for-<span style={{ color: "#ff00ff" }}>{header}</span>
    </h1>
  ) : (
    <h1>Popular Movies</h1>
  );
}

const Grid = ({ header, children }) => (
  <StyledGrid>
    <div className="GlobalContainer">
      {getHeading(header)}
      <StyledGridContent>{children}</StyledGridContent>
    </div>
  </StyledGrid>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
