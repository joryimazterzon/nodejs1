const notifier = require('../notifier');

function sendEmail(user) {
    console.log(`Sending email to ${user.email}...`);
    // implement send email logic here
}

notifier.on('userRegistered', sendEmail);
module.exports = sendEmail;