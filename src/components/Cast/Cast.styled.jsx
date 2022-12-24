import styled from "@emotion/styled";

export const List = styled.ul`
    padding: 30px 0;
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
    border-bottom: 3px solid;
    border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
`