import {createGlobalStyle} from "styled-components"
import global_styles from "./global-paramers.style"


const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    font-family: 'Roboto-Regular', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${global_styles.black};
    color: white;
  }


  ::-webkit-scrollbar {
    width: 0.5vw;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(00, 00, 00, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: #232323;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #121212;
    border-color: black;
    border-width: 5px;
  }




`

export default GlobalStyle;