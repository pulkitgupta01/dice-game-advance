
import styled from "styled-components";

export const Button = styled.button`
padding: 10px 18px;
min-width: 220px;
color: white;
border: none;
border-radius: 5px;
background: #000;
font-size: 16px;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;

}

`;

export const OutlineButton = styled(Button)`
background-color: white; 
 border: 1px solid black;
color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}
`;