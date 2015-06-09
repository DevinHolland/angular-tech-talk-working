angular.module('tech-talk', [])

	.controller('AppController', function($scope){
		$scope.testScopeLevel = "This should show up three places. Find the third! Hint: https://youtu.be/UhjG47gtMCo?t=44";
	});