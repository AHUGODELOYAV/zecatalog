const nodemailer = require("nodemailer");

exports.handler = function (event, context) {
  const transport = nodemailer.createTransport({
    host: "mail.alexamg.me",
    port: 465,
    auth: {
      user: "testing@alexamg.me",
      pass: "Probando123!"
    }
  });

  const { toemail, subject, message } = event.arguments;

  const mailOptions = {
    from: 'hello@zecatalog.com',
    to: toemail,
    subject: subject,
    html: message
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      context.done(error);
    }
    context.done(null, event);
  });
};