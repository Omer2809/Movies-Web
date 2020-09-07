import styled from "styled-components";

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 30px;

  .GlobalContainer {
    padding-bottom: 1.2rem;
  }
  h1 {
    font-family: "Abel", sans-serif;
    font-size: 42px;
    color: #111;
    font-weight: bold;
    margin-bottom:10px; 
    padding-bottom: 5px;
    /* max-width:350px; */
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    .header {
      border-bottom: 2px solid #663399;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 690px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 435px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
