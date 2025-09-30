const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const sendMail = async (req, res) => {
  const { message, subject } = req.body;

  const content = {
    to: process.env.SENDGRID_TO,
    from: process.env.SENDGRID_FROM,
    subject,
    text: message,
  };

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send(content);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(400).json({ message: "Email not sent" });
  }
};

export default sendMail;
