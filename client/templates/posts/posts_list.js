
Template.postsList.helpers({
  posts: function () {
    // return Posts.find({title: 'Introducing Telescope'});
    return Posts.find();
  },
  coolposts: function () {
  	return Posts.find({'cool': true});
  }
});