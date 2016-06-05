'use strict';

angular.module('estudioPropatoApp')
  .directive('footer', function() {
    return {
      templateUrl: '../html/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        scope.email = 'estudiopropato@fibertel.com.ar';
      }
    };
  });
