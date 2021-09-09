import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background:#000000;

    border-bottom: 6px solid #ffd700;
    `

export const Menu = styled.div`
    width:50%;
    height:70px; 
    display: flex;
    align-items: center;

    a{
        color:#fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
    }

    .barra::after{
        content: "|";
        margin:0 10px;
        color:#fff;
    }
    
    a:hover{
        color:#FFD700;
    }
    
   
`