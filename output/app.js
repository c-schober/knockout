"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var state = {
  name: ko.observable('Yolo')
};

var ViewModel1 = function ViewModel1() {
  _classCallCheck(this, ViewModel1);

  this.name = state.name;
};

var ViewModel2 = function ViewModel2() {
  _classCallCheck(this, ViewModel2);

  this.fullName = ko.computed(function () {
    return state.someProperty() + 'swag';
  });

  this.updateTheProperty = function () {
    state.someProperty('lit');
  };
};

ko.applyBindings(new ViewModel1());
ko.applyBindings(new ViewModel2());