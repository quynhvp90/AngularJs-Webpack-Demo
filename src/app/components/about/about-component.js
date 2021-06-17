function homeComponent() {
  var vm = this;
  vm.message = 'angularjs - webpack - demo';
}

const HOME_COMPONENT = {
  controller: homeComponent,
  controllerAs: 'vm',
  templateUrl: 'app/components/about/about.html'
}
export default HOME_COMPONENT;