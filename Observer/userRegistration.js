const notifier = require('./notifier');

function registerUser(user) {
    console.log(`Registering user ${user.name}...`);
    notifier.emit('userRegistered', user);
    // implement register user logic here
    return user;
}

module.exports = registerUser;