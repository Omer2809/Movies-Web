import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    transition: all 0.3s;
    object-fit: cover;
    animation: animateMovieThumb 0.5s;
    border-radius: 15px 15px 0px 0px;

    &:hover {
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
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: rgba(158, 158, 160, 0.5);
  border-radius: 20px;
  opacity: 0.9;
`;
export const StyledMovieThumb1 = styled.div`
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    object-fit: cover;
    animation: animateMovieThumb 0.5s;
    border-radius: 15px;

    &:hover {
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
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;
