(function(){
    'use strict';
    
    angular.module('mward', []);
    
    angular
        .module('mward')
        .controller('mainCtrl', ['$scope', function($scope){
            $scope.title = "Main Page";
        }]);
        
    angular
        .module('mward')
        .directive('mwardDevMap', [function () {
            return {
                templateUrl: 'src/partials/map-directive.html',
                replace: true,
                link: function () {
                    var map = new google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: 38.2,
                            lng: -85.76
                        },
                        scrollwheel: false,
                        zoom: 10
                    });
                }
            };
        }]);
        
      angular
        .module('mward')
        .directive('mwardDevNav', [function() {
            return {
                templateUrl: 'src/partials/nav-directive.html',
                replace: true,
                controller: 'navCtrl'
            }
        }
            
            
        ]);


}());

