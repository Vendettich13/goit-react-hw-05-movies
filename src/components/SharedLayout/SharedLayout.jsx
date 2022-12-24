import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Nav } from "./SharedLayout.styled";
import { Loader } from "./Loader";


export function SharedLayout() {
    return <Container>
      <Header>
        <Nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </Nav>
      </Header>
        <main style={{ padding: '10px 0' }}></main>
        <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
}