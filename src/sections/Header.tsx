import React from "react";
import { Scroller } from "../components";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import details from "../data/details.json";

interface IProps {}

interface IState {
  scroll: boolean;
  expanded: boolean;
  transparency: boolean;
}

const Logo = styled.span({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 700,
  lineHeight: "36px",
});

const Dot = styled.span({
  color: "#f06000",
  display: "inline",
});

export class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      scroll: false,
      expanded: false,
      transparency: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ transparency: true });
    }
    if (this.state.transparency && window.scrollY < 600) {
      this.setState({ scroll: false, transparency: true });
    } else {
      this.setState({ scroll: true });
    }
  };

  handleClickToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
      scroll: true,
      transparency: false,
    });
  };

  handleClickLink = () => {
    if (window.innerWidth <= 992) {
      this.setState({
        expanded: !this.state.expanded,
      });
    }
  };

  render() {
    return (
      <header
        className={
          this.state.scroll
            ? "kd-header fixed-top color"
            : "kd-header fixed-top"
        }
        onScroll={this.handleScroll}
      >
        <Container>
          <Navbar expand="lg" variant="dark" expanded={this.state.expanded}>
            <Navbar.Brand href="#">
              <Logo>
                {details.firstName}
                <Dot>{details.middleName}</Dot>
                {details.lastName}
              </Logo>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarNavDropdown"
              onClick={this.handleClickToggle}
            />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="ml-auto" as="ul">
                <Nav.Item as="li" onClick={this.handleClickLink}>
                  <Scroller href="#home" className="nav-link">
                    Accueil
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li" onClick={this.handleClickLink}>
                  <Scroller href="#about" className="nav-link">
                    A propos de moi
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li" onClick={this.handleClickLink}>
                  <Scroller href="#services" className="nav-link">
                    Parcours
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li" onClick={this.handleClickLink}>
                  <Scroller href="#recommendations" className="nav-link">
                    Recommandations
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li" onClick={this.handleClickLink}>
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
