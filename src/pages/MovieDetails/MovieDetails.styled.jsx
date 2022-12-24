import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.div`
display: block;
`
export const Image = styled.img`
    width: 350px;
    margin-right: 40px;
    border-radius: 10px;
`

export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
`
export const Year = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
`
export const Description = styled.h2`
    margin-bottom: 10px;
    font-size: 25px;
`
export const OverviewText = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`
export const Genres = styled.p`
    font-size: 20px;
`
export const MyLink = styled(NavLink)`
    padding: 5px 10px;
    text-decoration: none;
    display: inline-block;
    border-radius: 10px;

    font-size: 20px;
    font-weight: 500;
    color: black;
    transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover,
    &:focus {
        color: rgb(30, 1, 252);
    }

    &.active {
        color: white;
        background-color: rgb(30, 1, 252);
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`
export const BackLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    font-size: 30px;
    font-weight: 500;
    color: black;
    transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover,
    &:focus {
        color: rgb(30, 1, 252);
    }
`

export const LinkWrapper = styled.div`
padding: 20px 0;
border-top: 3px solid;
border-bottom: 3px solid;
border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
`

export const Additional = styled.p`
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
`