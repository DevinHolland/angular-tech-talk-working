angular.module('tech-talk')

	.factory('QuestionsService', function($q, QuestionsResource, AnswersResource){
		var service = {};

		service.getQuestions = function(){
			return QuestionsResource.getList().then(function(res){
				return res.data;
			});
		};

		service.saveAnswers = function(answers){
			var promises = [];

			angular.forEach(answers, function(answer, questionId){
				promises.push(
					AnswersResource.save(questionId, {
						answer: answer,
						question_id: questionId	
					})
				);
			});

			return $q.all(promises).then(function(results){
				return results;
			});
		};

		return service;
	});