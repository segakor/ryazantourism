import nodemailer from "nodemailer";

export async function sendMail(subject, text) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "rzn.visit@yandex.ru",
      pass: "atmwmibkbgxxictu",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "rzn.visit@yandex.ru",
    to: "rzn.visit@yandex.ru",
    subject: subject,
    html: text,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
