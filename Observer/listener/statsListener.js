const notifier = require('../notifier');

function logStats(user) {
    console.log(`Logging stats for user `,user);
    // implement update stats logic here
}

function sendToBlogPost(user, post) {
    console.log(`Sending post to blog post for user ${user.name} `,post);
    // implement send to blog post logic here
}

notifier.on('postCreated', (user, post) => sendToBlogPost(user, post));

notifier.on('userRegistered', logStats);
module.exports = logStats;
