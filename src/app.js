const state = {
  name: ko.observable('Yolooooo'),
}

class ViewModel1 {
  constructor() {
    this.name = state.name
  }
}

class ViewModel2 {
  constructor() {
    this.fullName = ko.computed(() => {
      return state.name() + 'swag'
    })
    this.updateTheProperty = () => {
      state.name('lit')
    }
  }
}

ko.applyBindings(new ViewModel1())
ko.applyBindings(new ViewModel2())

