window.APP = window.APP || {};

APP.CalculatorModel = Backbone.Model.extend({
  defaults: {
    departureCity: undefined,
    destinationCity: undefined,
    shippingOptionsWeight: undefined,
    shippingOptionsVolume: undefined
  }, 

  validate: function(attrs) {   
    var errorsDepartureCity = [],
        errorsDestinationCity = [],
        errorsShippingOptionsWeight = [],
        errorsShippingOptionsVolume = [];


    if(
      errorsDepartureCity.length != 0 ||
      errorsDestinationCity.length != 0 ||
      errorsShippingOptionsWeight.length != 0 ||
      errorsShippingOptionsVolume.length != 0 
    ) { 
      return {
        'departureCity': errorsDepartureCity,
        'destinationCity': errorsDestinationCity,
        'shippingOptionsWeight': errorsShippingOptionsWeight,
        'shippingOptionsVolume': errorsShippingOptionsVolume
      };
    };
  }  
});

