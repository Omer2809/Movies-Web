import styled from "styled-components";

export const StyledComments = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
  margin-bottom: 7px;
  padding: 23px 12px 10px 12px;

  width: auto;
  background-color: #fff;
  color: #444;

  .floatss {
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
  }

  .subpage_title_block {
    margin: 5px 0px 5px 15px;
    display: flex;
    padding: 0;
  }

  .belowHeading {
    padding: 5px 20px;
  }

  img {
    width: 67px;
    height: 100px;
    float: left;
    margin-right: 10px;
    margin-left: 3px;
    border: none;
    vertical-align: middle;
    @media screen and (max-width: 500px) {
      width: 87px;
      height: 120px;
      margin-left: 0px;
      margin-top: 6px;
    }
  }
  .parent {
    font-size: 15px;

    h3 {
      font: 17px verdana, Arial, sans-serif;
      font-weight: 700;
      margin: 2px 0.1em 2px 0;
      display: inline-block;
      color: #ff00ff;
    }
  }

  .header {
    margin: 0;
    padding: 0;
    border-bottom: medium none;
    color: #555;
    font: 23px verdana, Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .xx {
    color: #663399;
    font: 15px verdana, Arial, sans-serif;
    padding: 16px 0px 0px 0px;
  }

  .review {
    color: #666;
    font-size: 18px;
    font-weight: bold;
    padding-right: 5px;
    margin: 13px 16px 0px 0px;
    span {
      font-weight: italic;
    }
  }

  span {
    color: #ff00ff;
    font-weight: none;
  }

  .firstComment {
    color: #444;
    text-align: center;
    padding: 10px;
    margin: 10px auto;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 12px 10px 12px;
    .parent {
      h3 {
        margin: 10px 0.1em 4px 0;
      }
    }
    .header {
      font-size: 22px;
      font-weight: 640;
    }
    .review {
      margin: 2px 16px 0px 6px;
    }
    .belowHeading {
      padding: 5px 10px;
    }
    .floatss {
      flex-direction: column;
    }

    .subpage_title_block {
      margin: 5px 0px 5px 5px;
    }
  }
`;

export const StyledTextArea = styled.div`
  color: #444;
  margin: 20px auto;

  .input-group {
    position: relative;
    width: 100%;

    .label {
      color: #777;
      position: absolute;
      top: 30px;
      left: 17px;
    }
  }
`;
export const Input = styled.textarea`
  outline: none;
  border: 1px solid #dadca0;
  height: 100px;
  width: 100%;
  font-size: 18px;
  border-radius: 5px;
  padding: 7px;

  &:focus {
    border: 2px solid #663399;
  }

  &:focus + .label {
    background-color: #fff;
    top: -18px;
    padding: 10px;
    font-size: 14px;
    color: #663399;
    font-weight: bold;
  }

  &:valid + .label {
    display: none;
  }
`;
