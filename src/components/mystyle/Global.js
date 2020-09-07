import { createGlobalStyle } from "styled-components";
import { devices } from "./MediaQueries";

export const GlobalStyle = createGlobalStyle`
 * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height:1.5;
      }

      body {
        font-family: "Raleway", sans-serif;
        text-decoration: none;
        background-color: #f5efff;
        color: #fff;
        position:relative;
        padding-bottom:415px;
        min-height:100vh;
        @media (max-width:845px){
        padding-bottom:470px;
       }
        @media (max-width:745px){
        padding-bottom:530px;
       }
        /* @media (max-width:650px){
        padding-bottom:660px;
       } */
        @media (max-width:600px){
        padding-bottom:1040px;
       }
        @media (max-width:560px){
        padding-bottom:1060px;
       }
        @media (max-width:480px){
        padding-bottom:1080px;
       }
        @media (max-width:395px){
        padding-bottom:1095px;
       }
        @media (max-width:345px){
        padding-bottom:1115px;
       }
       
      }

      .GlobalContainer{
        max-width: 1200px;
         margin: auto;
          padding: 0 2.5rem;
       overflow: hidden;
       
  @media ${devices.mobile} {
    padding: 5px 1.2rem;
  }
      }
    
   
`;
