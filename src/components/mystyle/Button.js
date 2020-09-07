import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #663399;
    font-size: 16px;

    ${(props) =>props.primary &&
        css`
            background-color: #663399;
            color: white;
        `};
`;