angular.module('tech-talk')

	.factory('QuestionsResource', function($http){
		var service = {};

		service.getList = function(){
			return $http.get('/angular-tech-talk/questions.json').success(function(data){ return data; }).error(function(data){ console.log(data); });
		};

		return service;
	})

	.factory('AnswersResource', function($http){
		var service = {};

		service.save = function(questionId, answer){
			return $http.post('/angular-tech-talk/questions/' + questionId + '/answers.json', answer).success(function(data){ return data; }).error(function(data){ console.log(data) });
		}

		return service;
	});