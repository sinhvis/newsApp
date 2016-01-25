var app = angular.module('newsApp', []) ;

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = 'Hello World!' ;

	$scope.oldPosts = [
		'post 1',
		'post 2',
		'post 3',
		'post 4',
		'post 5'
	] ;

	$scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 15},
		{title: 'post 4', upvotes: 9},
		{title: 'post 5', upvotes: 4}
	] ;

	$scope.addPost = function() {
		// prevent user from submitting post with blank title
		if (!$scope.title || $scope.title === '') { return ; }

		$scope.posts.push({ title: $scope.title, upvotes: 0 }) ;

		// need to clear the post after the post has been created.
		$scope.title = '' ;
	} ;
}]) ;
