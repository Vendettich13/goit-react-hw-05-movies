import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    padding: 10px 15px;
`
export const Header = styled.header`
    height: 50px;
    border-bottom: 3px solid;
    border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
`
export const Link = styled(NavLink)`
  padding: 5px;
  border-radius: 3px;
  text-decoration: none;
  color: black;
  font-weight: 400;

  &.active {
    color: white;
    background: rgb(30, 1, 252);
  }
`
export const Footer = styled.footer`
  border-top: 3px solid;
  border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
`
export const Nav = styled.nav`
  display: flex;
  font-size: 30px;
  height: 40px;
  gap: 30px;
  align-items: center;
`