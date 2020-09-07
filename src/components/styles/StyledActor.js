import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
