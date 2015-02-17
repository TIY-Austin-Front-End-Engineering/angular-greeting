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
		if($scope.name.toLowerCase() === 'alex') {
			$scope.greeting = 'Well put on your dress and lets dance!!';
		}
		if($scope.name.toLowerCase() === 'paul') {
			$scope.greeting = 'What we have here is a failure to communicate!!';
		}
        if($scope.name.toLowerCase() === 'Gabe') {
			$scope.greeting = 'Now usually I don\'t do this, but, uh Go \'head on bring \'em off with little                         previews of the remix';
		}
		else {
			$scope.greeting = '';
		}
	});
});
