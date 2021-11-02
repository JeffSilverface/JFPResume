import React from "react";
import { Loader } from "./";

interface MyInterface {
  formState: {
    sendingMail: boolean;
    mailSent: boolean;
    displayBox: boolean;
    resetForm: boolean;
  };
  setFormState: any;
}

export class Validation extends React.Component<MyInterface> {
  closeWindow = () => {
    const { setFormState } = this.props;
    setFormState("done");
  };

  render() {
    return (
      <div
        className={
          this.props.formState.displayBox ? "validation" : "validation display"
        }
      >
        {this.props.formState.sendingMail ? (
          <Loader />
        ) : (
          <div className="box">
            {this.props.formState.mailSent ? (
              <p>
                La demande à bien été prise en compte.
                <br />
                Vous aller recevoir un email de confirmation.
              </p>
            ) : (
              <p>
                Echec de l'envoi du formulaire.
                <br />
                Envoyez moi un{" "}
                <a
                  className="App-link"
                  href="mailto:jfpann@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.closeWindow}
                >
                  Email
                </a>{" "}
                directement.
              </p>
            )}
            <p className="btn btn-kd" onClick={this.closeWindow}>
              ok
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Validation;
