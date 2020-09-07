import styled from "styled-components";

export const StyledMovieImage= styled.div`
  img {
    width:70px ;
    height: 100px;
    transition: all 0.3s;
    object-fit: cover;
    animation: animateMovieThumb 0.5s;
    border-radius: 2px;

  
    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
