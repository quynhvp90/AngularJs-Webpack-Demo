function homeComponent() {
  var model = this;
  model.message = 'Hello from home component';
}

const HOME_COMPONENT = {
  controller: homeComponent,
  template: '{{$ctrl.message}}'
}
export default HOME_COMPONENT;