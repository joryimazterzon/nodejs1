const EventEmitter = require('node:events');

class UserNotifier extends EventEmitter {}

const notifier = new UserNotifier();

module.exports = notifier;