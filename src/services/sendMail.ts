import axios from "axios";

interface FormValues {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const sendMail = async (values: FormValues) => {
  const response = await axios
    .post("https://jfpann.herokuapp.com/mail", values)
    .catch((e) => {
      throw e;
    });
  return response.data;
};

export default sendMail;
