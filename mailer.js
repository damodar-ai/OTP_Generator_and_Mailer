nodemailer = require('nodemailer');
otpwalafile = require('./index')

// service provider , credentials, handshaking
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'aditstudents2022@gmail.com',
            pass: 'dyrb orgr hbpc hstg'
        }
    })

// mail object
mail = {
    from: 'aditstudents2022@gmail.com',
    to: 'damodartiwari001@gmail.com',
    subject: 'OTP',
    text: 'your otp for signin is value' + genotp()
}

// send mail
transporter.sendMail(mail, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})