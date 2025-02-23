import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/Blizzard_Entertainment_Logo.png"
            alt="MyApp"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <NavDropdown
              title="Misc"
              id="basic-nav-dropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item as={NavLink} to="/numberone">
                Number One
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/numbertwo">
                Number Two
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/practiceproblem1">
                Practice Problem #1
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/regnewmember">
                Register a new member
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/practiceproject2">
                Practice Project #2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/complexmain"
              className="nav-link-custom"
            >
              Complex Main Practice Page
            </Nav.Link>
            <Nav.Link as={NavLink} to="/exercise1" className="nav-link-custom">
              Coding Exercise #1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogapp" className="nav-link-custom">
              Blog App
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/mainexampractice"
              className="nav-link-custom"
            >
              Main Exam Practice #3
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/mainexamfour"
              className="nav-link-custom"
            >
              Main Exam #4
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blizzardclone"
              className="nav-link-custom"
            >
              Blizzard Clone
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blizzardclone2"
              className="nav-link-custom"
            >
              Blizzard Clone #2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/formfirst" className="nav-link-custom">
              Form First
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/webtemplate"
              className="nav-link-custom"
            >
              A Template Website
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
