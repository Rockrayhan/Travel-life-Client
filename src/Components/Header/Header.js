import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      <Navbar className="mb-5" bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="/home">Travel Life</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>

            {
            user.email ?
              <div>
                <Link to="/signin">
                <button onClick={logOut} className="btn btn-warning">Log out</button>
              </Link>
              <Link style={{textDecoration:"none"}} to="addservice"> Add Blogs </Link>
              </div>

              :
              <Link to="/signin">
                <button className="btn btn-warning">Sign in</button>
              </Link>


            }

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </>
  );
};

export default Header;