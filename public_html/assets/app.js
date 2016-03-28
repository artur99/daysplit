var app = angular.module('daysplit',['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.controller('myrouter', function($scope) {
    $scope.tpl = {};
    $scope.tpl.url = 'templates/login.html';
})
.controller('AppCtrl', function($scope) {
    $scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];
    $scope.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', '...'];
    $scope.submit = function() {
    // submit code goes here
    };
});
// app.config(['$routeProvider', '$controllerProvider',
//     function($routeProvider, $controllerProvider) {
//         // remember mentioned function for later use
//         app.registerCtrl = $controllerProvider.register;
//         //your routes
//         $routeProvider.when('/', {templateUrl: 'templates/index.html'});
//         $routeProvider.when('/login', {templateUrl: 'templates/login.html'});
//         $routeProvider.otherwise({redirectTo: '/'});
//     }
// ]);

// angular.module('daysplit', ['ngMaterial'])
