let nodemailer = require('nodemailer')
const config = require('../config')

exports.mailService = async (props) => {
  let content = ``
  console.log(props)
  if (props.type === 'likes') {
     content = `
    <table>
      <tr>
        <th>Author</th>
        <th>Likes</th>
      </tr>
      <!-- Loop through the authorData array and add a row for each author -->
      ${authorData.map((author, index) => (
        <tr key ={inde}>
          <td>{author.firstName}</td>
          <td>{count}</td>
        </tr>
      ))}
    </table>
  `;
  
  
    console.log(content);
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
      to: props.email,
      subject: props.subject,
      html: content,
    })

    console.log('Message sent: %s', info.messageId)
  }
}