require('./listener/emailListener');
require('./listener/statsListener');

const registerUser = require('./userRegistration');
const createPost = require('./userPost');

const user1 = { name: 'Juan Perez', email: 'juan.perez@example.com' };
const user2 = { name: 'Maria Garcia', email: 'maria.garcia@example.com' };

registerUser(user1);
registerUser(user2);

createPost(user2, { title: 'Hello World', content: 'This is a test post' });