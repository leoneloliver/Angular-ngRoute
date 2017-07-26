var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  
  // order by options
  $scope.options = ['age', 'address','price','registered','isActive'];
  $scope.qtdHouse = 100;
  $scope.selectedOrder = 'address';
  $scope.titleHouse = 'Properties for Sale';
  
//http://beta.json-generator.com/api/json/get/41oKPXP17
  $http.get('http://beta.json-generator.com/api/json/get/EkL3OHbzX')
    .success(function(result) {
      $scope.houses = result;
    })
    .error(function(data, status) {
      console.log(data + " " + status);
    });
}]);
