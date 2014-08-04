'use strict';

/**
 * @ngdoc function
 * @name mytodoYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoYoApp
 */
angular.module('mytodoYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index,1);
    };
  });
