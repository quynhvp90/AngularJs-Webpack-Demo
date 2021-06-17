import '@uirouter/angularjs';
import HOME_COMPONENT from './components/home-component';
import ABOUT_COMPONENT from './components/about-component';
// angular.module('AngularComponentDemo', []).controller('homeController',['$scope', function($scope) {
//   $scope.messsage = 'Home controller';
//   $scope.name = 'App';
// }]);

let app = angular.module('AngularComponentDemo', ['ui.router'])
.component('homeComponent', HOME_COMPONENT)
.component('aboutComponent', ABOUT_COMPONENT);

app.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'Home',
    url: '/',
    component: 'homeComponent'
  };

  var aboutState = {
    name: 'About',
    url: '/about',
    component: 'aboutComponent'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);

});
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);