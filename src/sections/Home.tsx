import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextLoop from "react-text-loop";
import styled from "styled-components";
import { Scroller } from "../components";
import { fab } from "@fortawesome/free-brands-svg-icons";
import details from "../data/details.json";

const Dot = styled.div({
  color: "#f06000",
  display: "inline",
});

export class Home extends React.Component {
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <Container>
          <div className="intro">
            <h1 className="mb-2 mt-0">
              {details.fullFirstName}
              <Dot>{details.middleName}</Dot>
              {details.lastName}
            </h1>
            <span>
              Je suis{" "}
              <TextLoop
                className="textloop"
                springConfig={{ stiffness: 150, damping: 20 }}
                interval={2000}
              >
                {details.titles.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </TextLoop>
            </span>

            <ul className="social-icons light list-inline mb-0 mt-4">
              {details.socialNetworks.map((network) => (
                <li className="list-inline-item" key={network.iconName}>
                  <a
                    href={network.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={fab[network.iconName]} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Scroller href="#contact" className="btn btn-kd">
                Contactez moi
              </Scroller>
            </div>
          </div>
          <div className="scroll-down">
            <Scroller href="#about" className="mouse-wrapper">
              <span>Défiler</span>
              <span className="mouse">
                <span className="wheel" />
              </span>
            </Scroller>
          </div>
        </Container>
      </section>
    );
  }
}

export default Home;
