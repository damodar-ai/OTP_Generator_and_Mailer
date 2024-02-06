otpgen = require('otp-generator');
express = require('express');
port = 3000;
app = express();
app.listen(port , () => {
    console.log(`you are on ${port}`)
})

// OTP = otpgen.generate(2 , { digits: true , lowerCaseAlphabets : false , upperCaseAlphabets : false , specialChars : false});
genotp = () => {
    OTP = otpgen.generate(4);
    console.log(OTP)
    return(OTP);
}
genotp()
app.get('/' , (req,res) => {
    res.send(genotp())
})