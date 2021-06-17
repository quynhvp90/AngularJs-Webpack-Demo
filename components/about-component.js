function aboutComponent() {
  var model = this;
  model.message = 'Hello from about component';
}

const ABOUT_COMPONENT = {
  controller: aboutComponent,
  template: '{{$ctrl.message}}'
}
export default ABOUT_COMPONENT;