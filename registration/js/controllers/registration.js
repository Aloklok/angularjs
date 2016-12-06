myApp.controller('RegistrationCtrl',['$scope',function($scope){
	$scope.message = 'Hello';
    $scope.login = function(){
        $scope.message = "Welcome " +$scope.user.email; 
    };
    $scope.register = function(){
         $scope.message = "Welcome " +$scope.user.firstname; 
    };
}])