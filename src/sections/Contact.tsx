import React from "react";
import { Section } from "../components";
import { Row, Col, Button, Form } from "react-bootstrap";
import contact from "../data/contact.json";

export class Contact extends React.Component {
  render() {
    return (
      <Section id="contact" title="Gardons contact">
        <Row>
          <Col md={4}>
            <div className="contact-info">
              <h3>{contact.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: contact.subTitle }} />
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="inputName">
                  <Form.Control
                    type="text"
                    className="kd-form-control"
                    placeholder="Votre nom"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="inputEmail">
                  <Form.Control
                    type="email"
                    className="kd-form-control"
                    placeholder="Votre adresse Email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputSubject">
                  <Form.Control
                    type="text"
                    className="kd-form-control"
                    placeholder="Objet"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="kd-form-control"
                    placeholder="Message"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant="kd">Envoyer le message</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Contact;