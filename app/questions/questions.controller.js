angular.module('tech-talk')

	.controller('QuestionsController', function($scope, QuestionsService){
		console.log($scope.testScopeLevel);

		$scope.questions = {};

		$scope.answers = [];

		$scope.saveAnswers = function(answers){
			QuestionsService.saveAnswers(answers).then(function(){
				alert('Submitted. Thank you!');
			});
		};

		QuestionsService.getQuestions().then(function(data){
			$scope.questions = data;
		});
	});