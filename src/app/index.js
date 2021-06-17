import '@uirouter/angularjs';
import HOME_COMPONENT from './components/home/home-component';
import ABOUT_COMPONENT from './components/about/about-component';

// console.log('home: = ', HOME_COMPONENT.templateUrl)
let app = angular.module('AngularComponentDemo', ['ui.router'])
.component('homeComponent', HOME_COMPONENT)
.component('aboutComponent', ABOUT_COMPONENT);

app.config(['$stateProvider', function($stateProvider) {
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

}]);
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
  // $locationProvider.debugInfoEnabled(false);
}]);