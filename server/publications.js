Meteor.publish('posts', function () {
	return Posts.find();
})

Meteor.publish('coolposts', function () {
	return Posts.find({'cool': true});
})