const state = {
  name: ko.observable('Yol'),
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

ko.applyBindings(new ViewModel1())
ko.applyBindings(new ViewModel2())

