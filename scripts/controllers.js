angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $rootScope, Test) {

	$scope.$watch('name', function() {
		if($scope.name.toLowerCase() === 'aaron') {
			$scope.greeting = 'Nutella!';
		}
		else {
			$scope.greeting = '';
		}
	});
});