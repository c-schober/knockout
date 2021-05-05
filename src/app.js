const state = {
  name: ko.observable('Yolo'),
}

class ViewModel1 {
  constructor() {
    this.name = state.name
  }
}

class ViewModel2 {
  constructor() {
    this.fullName = ko.computed(() => {
      return state.someProperty() + 'swag'
    })
    this.updateTheProperty = () => {
      state.someProperty('lit')
    }
  }
}