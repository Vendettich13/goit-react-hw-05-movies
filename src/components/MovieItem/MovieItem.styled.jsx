import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Image = styled.img`
    width: 100%;
    height: auto;
`

export const Box = styled.li`
    border-radius: 10px;
    overflow: hidden;

    box-shadow: 0px 10px 15px 2px rgba(0,0,0,0.5);
    transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;

    &:hover,
    &:focus {
        transform: scale(1.01);
    }
`

export const Text = styled.p`
    font-weight: 500;
    padding: 10px;
    display: flex;
    align-items: center;
`
export const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
`