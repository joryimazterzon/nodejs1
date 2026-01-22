const notifier = require('../notifier');

function logStats(user) {
    console.log(`Logging stats for user `,user);
    // implement update stats logic here
}

function sendToBlogPost(post) {
    console.log(`Sending post to blog post `,post);
    // implement send to blog post logic here
}

notifier.on('postCreated', sendToBlogPost);

notifier.on('userRegistered', logStats);
module.exports = logStats;
