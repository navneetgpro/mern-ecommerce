import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import Login from './Login';
import Logo from './Logo';
import Signin from './../modal/signin';
import Signup from './../modal/signup';

function Index() {
  const [loginshow, setloginShow] = useState(false);
  const [signupshow, setsignupShow] = useState(false);
  const handleClose = type => {
    if(type==='login'){
      setloginShow(false);
    }else{
      setsignupShow(false);
    }
  } 
  const handleShow = type => {
    if(type==='login'){
      setloginShow(true);
      setsignupShow(false);
    }else{
      setsignupShow(true);
      setloginShow(false);
    }
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='nav-ff'>
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Exclusive items</Nav.Link>
          </Nav>
          <Nav>
            <Login handleShow={handleShow} />
            <Nav.Link href="#support">Support</Nav.Link>
            <Nav.Link className='mycart' href="#cart">
                <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Signin loginshow={loginshow} handleShow={handleShow} handleClose={handleClose} />
    <Signup signupshow={signupshow} handleShow={handleShow} handleClose={handleClose}/>
    </>
  );
}

export default Index;