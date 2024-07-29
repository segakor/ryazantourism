import nodemailer from 'nodemailer'

export async function sendMail(subject, text) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'mickslip2@yandex.ru',
      pass: 'afpgpzokangixjbb',
    },
    tls: {
        rejectUnauthorized: false
      }
  })

  const mailOptions = {
    from: 'mickslip2@yandex.ru',
    to: 'kornienko955@gmail.com',
    subject: subject,
    text: text,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
