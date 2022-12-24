import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    padding: 10px 15px;
`
export const Header = styled.header`
    border-bottom: 3px solid;
    border-top: 3px solid;
    border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
`
export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  border: 1px solid black;
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), border 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &:focus {
    color: rgb(30, 1, 252);
    border: 1px solid rgb(255, 255, 12);
  }

  &.active {
    color: white;
    background: rgb(30, 1, 252);
    border: 1px solid rgb(30, 1, 252);
  }
`
export const Nav = styled.nav`
    display: flex;
    font-size: 30px;
    gap: 30px;
    padding: 10px 0;
`