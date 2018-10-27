const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const key = require('./config/keys');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/contact',(req,res)=>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email} </li>
            </ul>
            <h3>Message</h3>
            <p>
                ${req.body.message}
            </p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USERNAME || key.gmail.username, // generated ethereal user
                pass: process.env.GMAIL_PASSWORD || key.gmail.password// generated ethereal password
            }
        });
        let mailOptions = {
            from: `${req.body.name}<${req.body.email}>`, // sender address
            to: 'jefferson.s.jiao@gmail.com', // list of receivers
            subject: 'Client message from portfolio', // Subject line
            text: `${req.body.message}`, // plain text body
            html: htmlEmail // html body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              res.send("Message sent successfully!");
         });
    })
});


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('./client/build'));

  // Express serve up index.html file if it doesn't recognize route

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})