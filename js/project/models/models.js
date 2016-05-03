window.APP = window.APP || {};

APP.CalculatorModel = Backbone.Model.extend({
  defaults: {
    departureCity: undefined,
    destinationCity: undefined,
    shippingOptionsWeight: undefined,
    shippingOptionsVolume: undefined
  }, 

  validate: function(attrs) {   
    var errorsArr = [];

    if(errorsArr.length != 0) { return errorsArr };
  }  
});

