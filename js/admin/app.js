'use strict';

/* App Module */

var messapp = angular.module('messapp', [
    'ngRoute',
    'ngMaterial',
    'AppControllers',
    'AppServices',
    'AppDirectives'
]);

messapp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'MainCtrl'
                }).when('/messentry',{
                    templateUrl: 'partials/messcardentry.html',
                    controller: 'MessEntryCtrl'
                }).when('/extrasentry',{
                    templateUrl: 'partials/extrasentry.html',
                    controller: 'ExtraxEntryCtrl'
                });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



