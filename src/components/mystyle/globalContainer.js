import styled, { css } from "styled-components";
import { devices } from "./MediaQueries";

export const GlobalContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;

  @media ${devices.mobile} {
    padding: 0px 1rem;
  }
`;
