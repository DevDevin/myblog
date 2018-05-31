const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  console.log(req.body.name)
  nodemailer.createTestAccount(( err, account) => {
    const htmlEmail = `
      <h3> Contact Details </h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3> Message </h3>
      <p> ${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      // port: 587,
      port: 587,
      auth: {
        user: 'dbennettksm58@gmail.com',
        pass: 'aliisthe14me'
      }
    })

    let mailOptions = {
      from: 'test@testaccount.com',
      to: 'devincbennett@gmail.com',
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) =>{
      if (err){
        return console.log(err)
      }
      console.log('Message sent %s', info.message)
      console.log('Message url %s', nodemailer.getTestMessageUrl(info))
    })
  })
});
// app.post('/api/form', (req, res) => {
//   nodemailer.createTestAccount((err, account) => {
//     const htmlEmail = `
//       <h3> Contact Details </h3>
//       <ul>
//         <li> Name: ${req.body.name} </li>
//         <li> Email: ${req.body.email} </li>
//       </ul>
//       <h3>Message</h3>
//       <p> ${req.body.message} </p>
//     `
//
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'z373742wycqaifdk@ethereal.email', // generated ethereal user
//             pass: 'vefZUXhezdwadUGw5Z' // generated ethereal password
//         }
//       })
//     })
//
//     // setup email data with unicode symbols
//    let mailOptions = {
//        from: 'test@testaccount.com', // sender address
//        to: 'z373742wycqaifdk@ethereal.email', // list of receivers
//        subject: 'New Message', // Subject line
//        text: req.body.message, // plain text body
//        html: '<b>Hello world?</b>' // html body
//    }
//
//    // send mail with defined transport object
//    transporter.sendMail(mailOptions, (error, info) => {
//        if (error) {
//            return console.log(error);
//        }
//        console.log('Message sent: %s', info.messageId);
//        // Preview only available when sending through an Ethereal account
//        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//
//
//   })
// })
// there is something wrong with the above syntax. Maybe just go through and copy him exactly.
const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
