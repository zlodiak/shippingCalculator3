window.APP = window.APP || {};

APP.CityOfDepartureModel = Backbone.Model.extend({
  defaults: {
    activeState: true,
    cityName: undefined
  }, 

  validate: function(attrs) {   
    var errorsArr = [];

    if(errorsArr.length != 0) { return errorsArr };
  }  
});

