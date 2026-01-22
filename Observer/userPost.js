const notifier = require('./notifier');

function createPost(post) {
    console.log(`Creating post ${post.title}...`);
    notifier.emit('postCreated', post);
    // implement create post logic here
    return post;
}

module.exports = createPost;