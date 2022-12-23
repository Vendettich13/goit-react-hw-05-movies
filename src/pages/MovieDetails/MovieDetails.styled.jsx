import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
display: block;
`
export const Image = styled.img`
    width: 300px;
    margin-right: 40px;
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
export const Link = styled(NavLink)`
    text-decoration: none;
    display: block;
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 500;
    color: black;
`