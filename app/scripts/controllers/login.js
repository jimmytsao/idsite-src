'use strict';

angular.module('stormpathIdpApp')
  .controller('LoginCtrl', function ($scope,$routeParams) {
    $scope.hasSocial = $routeParams.hasSocial === 'false' ? false : true;
    console.log($routeParams);
    return $scope;
  });