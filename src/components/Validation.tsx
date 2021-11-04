import React from "react";
import { Loader } from "./";
import contact from "../data/contact.json";

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
              <span dangerouslySetInnerHTML={{ __html: contact.mailOk }} />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: contact.mailNok }} />
            )}
            <p className="btn btn-kd" onClick={this.closeWindow}>
              OK
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Validation;
