import React from "react";
import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Services,
  Review,
  Contact,
} from "../sections";
import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

import "../components/Icons";
import "bootstrap/dist/css/bootstrap.min.css";

interface IProps {}

interface IState {
  formState: {
    sendingMail: boolean;
    mailSent: boolean;
    displayBox: boolean;
    resetForm: boolean;
  };
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      formState: {
        sendingMail: false,
        mailSent: false,
        displayBox: false,
        resetForm: false,
      },
    };
  }

  setFormState = (action: string) => {
    console.log(action);
    if (action === "sending") {
      this.setState({
        formState: {
          sendingMail: true,
          mailSent: false,
          displayBox: true,
          resetForm: false,
        },
      });
    }
    if (action === "ok") {
      this.setState({
        formState: {
          sendingMail: false,
          mailSent: true,
          displayBox: true,
          resetForm: true,
        },
      });
    }
    if (action === "nok") {
      this.setState({
        formState: {
          sendingMail: false,
          mailSent: false,
          displayBox: true,
          resetForm: false,
        },
      });
    }
    if (action === "done") {
      this.setState({
        formState: {
          sendingMail: false,
          mailSent: false,
          displayBox: false,
          resetForm: false,
        },
      });
    }
  };

  render() {
    return (
      <>
        <Header
          formState={this.state.formState}
          setFormState={this.setFormState}
        />
        <main>
          <Home />
          <About />
          <Services />
          <Container>
            <Row>
              <Col md={6}>
                <Education />
              </Col>
              <Col md={6}>
                <Experience />
              </Col>
            </Row>
          </Container>

          <Review />
          <Contact
            formState={this.state.formState}
            setFormState={this.setFormState}
          />
        </main>
        <Footer />
        <ScrollTopArrow />
      </>
    );
  }
}

export default App;
