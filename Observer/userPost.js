const notifier = require('./notifier');

function createPost(user, post) {
    console.log(`Creating post ${post.title}... for user ${user.name}`);
    notifier.emit('postCreated', user, post);
    // implement create post logic here
    return { user, post };
}

module.exports = createPost;