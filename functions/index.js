const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const secret = require("./secret.js");
const cors = require("cors")({ origin: true });

admin.initializeApp();

let transport = {
    service: "hotmail",
    auth: { 
        user: secret.emailSender,
        pass: secret.emailPwd //secret.emailPwd
    }
};
let transporter = nodemailer.createTransport(transport);
functions.logger.info(transport);

exports.sendGMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {      
        // getting dest email by query string
        let data = req.body.data;
        
        const mailOptions = {
            from: secret.emailSender, // Something like: Jane Doe <janedoe@gmail.com>
            to: secret.emailRecipient,
            subject: "CONTATO DO SITE MM Portfolio", // email subject
            text: data.name + "\n\n" + data.email + "\n\n" + data.message // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                functions.logger.error(err);
                return res.send(err);
            }
            
            functions.logger.info(info);
            return res.send({ data: { msg: "Sended OK: " + mailOptions.text }});
        });
    });    
});