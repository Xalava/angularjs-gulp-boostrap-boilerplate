'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider
	  .when('/view1', {
	    templateUrl: 'views/view1/view1.html',
	    controller: 'View1Ctrl'
	  })
	  .when('/view2', {
	    templateUrl: 'views/view2/view2.html',
	    controller: 'View2Ctrl'
	  })
	  .otherwise({
	  	redirectTo: '/view1'
	  });
}]);
