const nodemailer = require('nodemailer');

//Step1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'erpportaliiitk@gmail.com',
        // pass : 'IIITkota'
        user: 'mangalrishabh49@gmail.com',
        pass: '***********'
    }
});

//Step2

let mailOptions = {
    from: 'mangalrishabh49@gmail.com',
    // to: '2018kucp1127@iiitkota.ac.in',
    to: '2018kucp1127@iiitkota.ac.in',
    subject: 'New assignment',
    text: `Dear Students,

    Here is your New Assignment.
    
    
     we appreciate your dedication `,
    attachments: [{
        filename: 'test.pdf',
        path: './assets/logo.jpg'
    }]

}

//Step 3

transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log('error', err)
    else console.timeLog('mail sent!!!!!!!!!')
})