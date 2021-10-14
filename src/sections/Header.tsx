import React from "react";
import { Scroller } from "../components";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import details from "../data/details.json";

interface IProps {}

interface IState {
  scroll: boolean;
}

const Logo = styled.span({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 700,
  lineHeight: "36px",
});

const Dot = styled.span({
  color: "#ff4c60",
  display: "inline",
});

let scrollBool: boolean = false;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollBool = true;
  } else {
    scrollBool = false;
  }
});

export class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      scroll: scrollBool,
    };
  }

  // {
  //   hamburgerClickState ? "nav-menu nav-menu-active" : "nav-menu"
  // }

  render() {
    return (
      <header className="kd-header fixed-top">
        <Container>
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#">
              <Logo>
                {details.firstName}
                <Dot>{details.middleName}</Dot>
                {details.lastName}
              </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="ml-auto" as="ul">
                <Nav.Item as="li">
                  <Scroller href="#home" className="nav-link">
                    Accueil
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#about" className="nav-link">
                    A propos de moi
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#education" className="nav-link">
                    Parcours
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#recommendations" className="nav-link">
                    Recommandations
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#contact" className="nav-link">
                    Contact
                  </Scroller>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}

export default Header;
