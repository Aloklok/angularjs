var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/login',{
			templateUrl: 'views/login.html',
			controller: 'RegistrationCtrl'
		})
		.when('/register',{
			templateUrl: 'views/register.html',
			controller: 'RegistrationCtrl'
		})
		.when('/success',{
			templateUrl: 'views/success.html',
			controller: 'SuccessCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})
}]);