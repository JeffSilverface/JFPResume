import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import knowledge from "../data/knowledge.json";

const tools = knowledge.tools;

export class Tools extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {tools.map((t, index) => (
            <React.Fragment key={t.name}>
              {index % 4 === 0 && <div className="w-100 d-none d-md-block" />}
              <Col md={3} xs={6}>
                <div className="knowledge">
                  <div className="item">
                    <a href={t.link} target="_blank" rel="noopener noreferrer">
                      <img className="icons" src={t.image} alt={t.name} />
                      <p>{t.name}</p>
                    </a>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Tools;
