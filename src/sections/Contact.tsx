import React from "react";
import { Section } from "../components";
import { Row, Col } from "react-bootstrap";
import contact from "../data/contact.json";
import mailgo, { MailgoConfig } from "mailgo";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import sendMail from "services/sendMail";

interface MyProps {
  formState: {
    sendingMail: boolean;
    mailSent: boolean;
    displayBox: boolean;
    resetForm: boolean;
  };
  setFormState: any;
}

interface FormValues {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const mailgoConfig: MailgoConfig = {
  lang: "fr",
  showFooter: false,
  actions: { skype: false, whatsapp: false },
};

const CustomErrors = (props: any) => {
  const { children } = props;
  return <div className="input-errors">{children}</div>;
};

const CustomInput = ({ field, form, ...props }: any) => {
  return (
    <div>
      <div>
        <ErrorMessage name={field.name} component={CustomErrors} />
      </div>
      {props.type === "textarea" && (
        <textarea {...field} {...props} id={field.name} type={props.type} />
      )}
      {props.type !== "textarea" && (
        <div>
          <input {...field} {...props} id={field.name} type={props.type} />
        </div>
      )}
    </div>
  );
};

export class Contact extends React.Component<MyProps> {
  componentDidMount() {
    mailgo(mailgoConfig);
  }

  initialValues: FormValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };

  userSchema = Yup.object().shape({
    Name: Yup.string().required("Comment vous appelez vous ?"),
    Email: Yup.string()
      .email("Format d'Email incorrect.")
      .required("un email = une réponse."),
    Subject: Yup.string().required("Avec un petit objet c'est plus sympa."),
    Message: Yup.string().required("Laissez moi un petit mot."),
  });

  sendMessage = async (values: FormValues, actions: any) => {
    const { setFormState } = this.props;
    setFormState("sending");
    const result = await sendMail(values);

    if (result) {
      setFormState("ok");
    } else {
      setFormState("nok");
    }
    if (this.props.formState.resetForm) {
      actions.resetForm({});
    }
    actions.isSubmitting = false;
  };

  render() {
    return (
      <Section id="contact" title="Gardons contact">
        <Row>
          <Col md={4}>
            <div className="contact-info">
              <h3 dangerouslySetInnerHTML={{ __html: contact.title }} />
              <div dangerouslySetInnerHTML={{ __html: contact.subTitle }} />
            </div>
          </Col>
          <Col md={8}>
            <Formik
              onSubmit={this.sendMessage}
              initialValues={this.initialValues}
              validateOnChange={false}
              validationSchema={this.userSchema}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Field
                        className="kd-form-control"
                        type="text"
                        name="Name"
                        component={CustomInput}
                        placeholder="Vos noms et prénoms"
                      />
                    </Col>
                    <Col md={6}>
                      <Field
                        className="kd-form-control"
                        type="Email"
                        name="Email"
                        component={CustomInput}
                        placeholder="Votre email"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Field
                        className="kd-form-control"
                        type="text"
                        name="Subject"
                        component={CustomInput}
                        placeholder="Objet du message"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Field
                        className="kd-form-control textarea"
                        type="textarea"
                        name="Message"
                        component={CustomInput}
                        placeholder="Message"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div>
                        <input
                          className="btn btn-kd"
                          type="submit"
                          value="Envoyer le message"
                          disabled={isSubmitting}
                        />
                      </div>
                    </Col>
                  </Row>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Contact;
