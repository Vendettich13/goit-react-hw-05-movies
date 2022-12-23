import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Footer, Header, Link, Nav } from "../App/App.styled";


export function SharedLayout() {
    return <Container>
      <Header>
        <Nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </Nav>
      </Header>
        <main style={{ padding: '20px 0' }}></main>
        <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
}