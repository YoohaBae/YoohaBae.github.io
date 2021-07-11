var express = require('express');
var path = require('path');
var router = express.Router();
const nodemailer = require("nodemailer");
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', {title: 'Contact Me'});
});
router.post('/', function (req, res) {
    // Instantiate the SMTP server
    let transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'yooha.bae.2@gmail.com',
            pass: 'nfwvaomhrzmmbprq'
        }
    });
    // Specify what the email will look like
    let mailOption = {
        from: `${req.body.name}`, // This is ignored by Gmail
        to: 'yooha.bae.2@gmail.com',
        subject: 'New message from contact form at https://yooha.herokuapp.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    transport.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log("nodemailer error" + error);
        }
        else {
            res.redirect('/contact-sent');
        }
    })
});

module.exports = router;