require('./listener/emailListener');
require('./listener/statsListener');

const registerUser = require('./userRegistration');

const user1 = { name: 'John Doe', email: 'john.doe@example.com' };
const user2 = { name: 'Jane Doe', email: 'jane.doe@example.com' };

registerUser(user1);
registerUser(user2);