const nodemailer = require('nodemailer');

// Nodemailer
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'Gmail',
    auth: {
      type: 'login',
      user: process.env['SENDER_EMAIL'],
      pass: process.env['SENDER_PASS'],
    }
});
  
async function mail() {
    let info = await transporter.sendMail();
    console.log('Message sent: %s', info.messageId);
}

module.exports = {
    sendMail: function(req, res) {
        console.log('here');
        var name = req.body.name
        var email = req.body.email
        var message = req.body.message
        var content = `name: ${name} \n email: ${email} \n message: ${message}`
        
        console.log(content);
      
        const mail = {
          from: email, //sender address
          to: 'admin@tripster.life, ragsdale.jar@gmail.com', // receiver's address
          subject: 'New Message from Tripstir', // subject line
          text: content // plain text body
        }
        
        transporter.sendMail(mail, (err, data) => {
          if (err) {   
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            });
          }
        });
    }
};
