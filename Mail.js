var mail  = require('nodemailer')

var transporter = mail.createTransport({
    service:"gmail",
    auth:{
    user:'vineetagarwal.now@gmail.com',
    pass:"qygjtbjcyctigqdf"
    }
})

var mailopt = {
    from:"vineetagarwal.now@gmail.com",
    to:"codewithvineet@gmail.com",
    subject:"testing nodemailer",
    text:"this was sent using npm packaage nodemailer"
};

transporter.sendMail(mailopt , function(error , info){
    if(error) console.log(error)

    else console.log("Email sent " +info.response);
})