import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        font: 14px;
        font-family: 'Poppins', sans-serif;
        background-color: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;  
    }

    ul{
        list-style: none;
    }


`;