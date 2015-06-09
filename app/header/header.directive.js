angular.module('tech-talk')

	.directive('appHeader', function(){
		return {
			templateUrl: 'app/header/header.view.html',
			controller: 'HeaderController'
		}
	});