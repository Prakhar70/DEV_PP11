const cron = require("node-cron");

const nodemailer = require("nodemailer");
  

  
// Calling sendEmail() function every 1 minute
cron.schedule("*/1 * * * *", function() {
sendMail();
});
  
// Send Mail function using Nodemailer
function sendMail() {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "prakharagarwal70@gmail.com",
        pass: "prakhar2121"
        }
    });
      
    // Setting credentials
    let mailDetails = {
        from: "prakharagarwal70@gmail.com",
        to: "sugam.agarwal1995@gmail.com",
        subject: "Test mail using Cron job",
        text: "Node.js cron job email"
           + " testing for GeeksforGeeks"
    };
      
      
    // Sending Email
    mailTransporter.sendMail(mailDetails, 
                    function(err, data) {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log("Email sent successfully");
        }
    });
}
  