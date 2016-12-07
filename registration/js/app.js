var myApp = angular.module('myApp', ['ngRoute', 'firebase']);
myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
        if (error = 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry,you must log in to access that page';
            $location.path('/login');
        }
    })
           }]);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationCtrl'
        })
        .when('/success', {
            templateUrl: 'views/success.html',
            controller: 'SuccessCtrl',
            resolve: {
                currentAuth: function (Authentication) {
                    return Authentication.requireSignIn();
                }
            }
        })
        .otherwise({
            redirectTo: '/login'
        })
}]);