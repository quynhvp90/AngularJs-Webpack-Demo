
// (function() {
//   'use strict';
//   console.log('home start');
//   angular.module('AngularWebpackDemo', [])
//   .directive('homeComponent', homeComponent);
//   function homeComponent() {
//     var directive = {
//       restrict: 'E',
//       templateUrl: '/app/components/home/home.html',
//       controller: controller,
//       controllerAs: 'vm',
//       bindToController: true,
//     };
//     return directive;
//     function controller($scope, $log) {
//       var vm = this;
//       console.log('Home');
//       vm.message = 'Hello from home component';
//     }
//   }
// })();

function homeComponent() {
  var vm = this;
  vm.message = 'Welcome to webpack';
}

const HOME_COMPONENT = {
  controller: homeComponent,
  controllerAs: 'vm',
  templateUrl: '/app/components/home/home.html'
}
export default HOME_COMPONENT;