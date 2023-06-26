let nodemailer = require('nodemailer')
const config = require('../config')

exports.mailService = async (props) => {
  let content = ``
  if (props.type === 'likes') {
    content = `
    <table>
      <tr>
        <th>Author</th>
        <th>Likes</th>
      </tr>
      ${props.authorData.map((author, index) => (
      '<tr key="' + index + '"><td>' + author.author.firstName + '</td><td>' +author.count + '</td></tr>'
    ))}
    </table>
`
  }
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.sendEmailAddress,
      pass: config.sendEmailPassword,
    },
  })

  if (props.email) {
    let info = await transporter.sendMail({
      from: `"Book shop" <${config.sendEmailAddress}>`,
      to:  props.reciverEmail, //to change reciver email
      subject: props.subject,
      html: content,
    })

    console.log('Message sent: %s', info.messageId)
  }
}