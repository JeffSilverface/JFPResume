import React from "react";
import { Section } from "../components";
import { Row, Col, Button } from "react-bootstrap";
import contact from "../data/contact.json";
import mailgo, { MailgoConfig } from "mailgo";

const mailgoConfig: MailgoConfig = {
  lang: "fr",
  showFooter: false,
  actions: { skype: false, whatsapp: false },
};

export class Contact extends React.Component {
  componentDidMount() {
    mailgo(mailgoConfig);
  }

  render() {
    return (
      <Section id="contact" title="Gardons contact">
        <Row>
          <Col md={8}>
            <div className="contact-info">
              <h3 dangerouslySetInnerHTML={{ __html: contact.title }} />
            </div>
          </Col>
          <Col md={4}>
            <Row>
              Redigez un
              <a
                className="App-link"
                href="mailto:jfpann@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mail
              </a>
            </Row>
            <Row>
              contactez moi par <br />
              <a
                className="App-link"
                href="tel:06 82 65 02 85"
                target="_blank"
                rel="noopener noreferrer"
              >
                Téléphone
              </a>
            </Row>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Contact;
