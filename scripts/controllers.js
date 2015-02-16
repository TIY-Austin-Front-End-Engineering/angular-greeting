angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $rootScope, Test) {

	$scope.$watch('name', function() {
		if($scope.name.toLowerCase() === 'aaron') {
			$scope.greeting = 'Nutella!!!!';
		}
		if($scope.name.toLowerCase() === 'travis') {
			$scope.greeting = 'My eyes, the goggles do nothing';
		}
		if($scope.name.toLowerCase() === 'burk') {
			$scope.greeting = 'Your mother thinks I am a nice young man';
		}
		if($scope.name.toLowerCase() === 'daniel') {
			$scope.greeting = 'Dave Brubeck is insane';
		}
		else {
			$scope.greeting = '';
		}
	});
});
