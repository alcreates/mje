const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");


const app = express();

var smtpTransport = nodemailer.createTransport({
        host: 'smtp.office365.com', // Office 365 server
        port: 587,     // secure SMTP
        secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    
    auth: {
        user: keys.google.email,
        pass: keys.google.clientSecret
    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(path.join(__dirname, '../dist')));


app.post('/contactus', function(req,res){
    const mailOptions = {
        from: req.body.email,
        to: 'alcreates101@gmail.com',
        subject: req.body.subject,
        text: req.body.message 
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
               console.log(error);
           res.end("error");
        }else{
               console.log("Message sent: " + response.message);
           res.end("sent");
            }
   });
});
//for developement
//app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => {
    console.log("in get ");
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});




  



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// models.sequelize.sync().then(() => {

    server.listen(port, () => console.log(`API running on localhost:${port} `));

    
// });
