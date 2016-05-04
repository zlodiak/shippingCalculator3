window.APP = window.APP || {};

APP.CalcModel = Backbone.Model.extend({
  defaults: {
    departureCity: undefined,
    destinCity: undefined,
    shippingOptionsWeight: undefined,
    shippingOptionsVolume: undefined,
    errorsDepartureCity: [],
    errorsDestinCity: [],
    errorsShippingOptionsWeight: [],
    errorsShippingOptionsVolume: []   
  }, 

  validate: function(attrs) {   
    this._resetErrors();

    this._validateDepartureCity(attrs.departureCity);
    this._validateShippingOptionsWeight(attrs.shippingOptionsWeight);

    if(
      this.get('errorsDepartureCity').length != 0 ||
      this.get('errorsDestinCity').length != 0 ||
      this.get('errorsShippingOptionsWeight').length != 0 ||
      this.get('errorsShippingOptionsVolume').length != 0 
    ) { 
      return {
        'departureCity': this.get('errorsDepartureCity'),
        'destinCity': this.get('errorsDestinCity'),
        'shippingOptionsWeight': this.get('errorsShippingOptionsWeight'),
        'shippingOptionsVolume': this.get('errorsShippingOptionsVolume')
      };
    };
  },

  _resetErrors: function() {
    this.set({'errorsDepartureCity': []});
    this.set({'errorsDestinCity': []});
    this.set({'errorsShippingOptionsWeight': []});
    this.set({'errorsShippingOptionsVolume': []});    
  },

  _validateDepartureCity: function(departureCity) { 
    var emptyCheckDepartureCity = APP.valuesValidator.emptyCheck(departureCity), 
        isNumCheckDepartureCity = APP.valuesValidator.isNumCheck(departureCity);

    if(emptyCheckDepartureCity) { 
      this.get('errorsDepartureCity').push(emptyCheckDepartureCity) 
    };

    if(isNumCheckDepartureCity) { 
      this.get('errorsDepartureCity').push(isNumCheckDepartureCity) 
    };    
  },

  _validateShippingOptionsWeight: function(shippingOptionsWeight) {
    var emptyCheckShippingOptionsWeight = APP.valuesValidator.emptyCheck(shippingOptionsWeight), 
        negativeNumShippingOptionsWeight = APP.valuesValidator.negativeNumCheck(shippingOptionsWeight), 
        nullNumShippingOptionsWeight = APP.valuesValidator.nullNumCheck(shippingOptionsWeight), 
        isStrCheckShippingOptionsWeight = APP.valuesValidator.isStrCheck(shippingOptionsWeight);

    if(emptyCheckShippingOptionsWeight) { 
      this.get('errorsShippingOptionsWeight').push(emptyCheckShippingOptionsWeight) 
    };

    if(negativeNumShippingOptionsWeight) { 
      this.get('errorsShippingOptionsWeight').push(negativeNumShippingOptionsWeight) 
    };

    if(nullNumShippingOptionsWeight) { 
      this.get('errorsShippingOptionsWeight').push(nullNumShippingOptionsWeight) 
    };

    if(isStrCheckShippingOptionsWeight) { 
      this.get('errorsShippingOptionsWeight').push(isStrCheckShippingOptionsWeight) 
    };    
  }

});

