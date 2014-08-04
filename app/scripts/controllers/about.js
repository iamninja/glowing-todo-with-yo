'use strict';

/**
 * @ngdoc function
 * @name mytodoYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoYoApp
 */
angular.module('mytodoYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
