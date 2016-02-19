(function(){
    'use strict';
    
    angular.module('myApp', []);
    
    angular
        .module('myApp')
        .controller('mainCtrl', ['$scope', function($scope){
            $scope.title = "Main Page";
        }]);

}())