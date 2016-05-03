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

    var emptyCheckDepartureCity = this.emptyCheck(attrs.departureCity), 
        isNumCheckDepartureCity = this.isNumCheck(attrs.departureCity);

    if(emptyCheckDepartureCity) { errorsDepartureCity.push(emptyCheckDepartureCity) };
    if(isNumCheckDepartureCity) { errorsDepartureCity.push(isNumCheckDepartureCity) };

    var emptyCheckShippingOptionsWeight = this.emptyCheck(attrs.shippingOptionsWeight), 
        negativeNumShippingOptionsWeight = this.negativeNumCheck(attrs.shippingOptionsWeight), 
        nullNumShippingOptionsWeight = this.nullNumCheck(attrs.shippingOptionsWeight), 
        isStrCheckShippingOptionsWeight = this.isStrCheck(attrs.shippingOptionsWeight);

    if(emptyCheckShippingOptionsWeight) { errorsShippingOptionsWeight.push(emptyCheckShippingOptionsWeight) };
    if(negativeNumShippingOptionsWeight) { errorsShippingOptionsWeight.push(negativeNumShippingOptionsWeight) };
    if(nullNumShippingOptionsWeight) { errorsShippingOptionsWeight.push(nullNumShippingOptionsWeight) };
    if(isStrCheckShippingOptionsWeight) { errorsShippingOptionsWeight.push(isStrCheckShippingOptionsWeight) };

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
  },

  emptyCheck: function(value) { 
    if($.trim(value).length == 0) { return 'Это поле не может быть пустым' };
  },

  negativeNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) < 0) { return 'Это значение не может быть меньше нуля' };
  },

  nullNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) == 0) { return 'Это значение не может быть равно нулю' };
  },

  isNumCheck: function(value) { 
    if(isNaN(parseInt($.trim(value), 10)) == false) { return 'Это значение не может быть цифрой' };
  },

  isStrCheck: function(value) { 
    if(isNaN(parseInt($.trim(value), 10)) == true) { return 'Это значение должно быть цифрой' };
  }            
});

