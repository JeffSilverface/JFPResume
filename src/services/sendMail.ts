import axios from "axios";

interface FormValues {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const sendMail = async (values: FormValues) => {
  const response = await axios
    .post("http://localhost:5000/mail", values)
    .catch((e) => {
      throw e;
    });
  console.log("response", response);
};

export default sendMail;
