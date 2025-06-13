import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavbarWrapper, Divider } from '../Style/StyledComponents';

export default function Header() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const handleResize = () => { setIsSmall(window.innerWidth < 768); }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavbarWrapper expand="md" data-bs-theme="dark" className="w-100" fixed="top">
      <Container className="d-flex justify-content-between align-items-center px-3">
        <div className="flex-grow-2">
          <Navbar.Brand href="#home" aria-label="Homepage">{isSmall ? 'Vincent' : 'Vincent Xian'}</Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="navbar-collapse" className="hamburger-toggle"/>
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="gap-md-3 gap-1 flex-grow-1 d-flex flex-md-row flex-column justify-content-center align-items-center">
            <Nav.Link href="#about">{'About Me'}</Nav.Link>
            { isSmall ? null : <Divider aria-hidden="true" /> }
            <Nav.Link href="#compsci">{'CompSci'}</Nav.Link>
            { isSmall ? null : <Divider aria-hidden="true" /> }
            <Nav.Link href="#arts">{'Animation / 3D-Vis'}</Nav.Link>
            { isSmall ? null : <Divider aria-hidden="true" /> }
            <Nav.Link href="#activities">{'Activities'}</Nav.Link>
            { isSmall ? null : <Divider aria-hidden="true" /> }
            <Nav.Link href="#contact">{'Contact Me'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarWrapper>
  );
}
