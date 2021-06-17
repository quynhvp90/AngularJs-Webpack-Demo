// (function() {
//   'use strict';
//   console.log('about start');
//   angular.module('AngularWebpackDemo', [])
//   .directive('aboutComponent', aboutComponent);
//   function aboutComponent() {
//     var directive = {
//       restrict: 'E',
//       templateUrl: '/app/components/about/about.html',
//       controller: controller,
//       controllerAs: 'vm',
//       bindToController: true,
//     };
//     return directive;
//     function controller($scope, $log) {
//       var vm = this;
//       console.log('Home');
//       vm.message = 'Hello from about component';
//     }
//   }
// })();

function aboutComponent() {
  var vm = this;
  vm.message = 'angularjs - webpack - demo';
}

const ABOUT_COMPONENT = {
  controller: aboutComponent,
  controllerAs: 'vm',
  templateUrl: '/app/components/about/about.html'
}
export default ABOUT_COMPONENT;