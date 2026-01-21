const notifier = require('../notifier');

function logStats(user) {
    console.log(`Logging stats for user `,user);
    // implement update stats logic here
}

notifier.on('userRegistered', logStats);
module.exports = logStats;
