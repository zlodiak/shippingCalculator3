window.APP = window.APP || {};

APP.CalcModel = Backbone.Model.extend({
  defaults: {
    departureCity: undefined,
    destinCity: undefined,
    shippOptionsWeight: undefined,
    shippOptionsVolume: undefined,
    errorsDepartureCity: [],
    errorsDestinCity: [],
    errorsShippOptionsWeight: [],
    errorsShippOptionsVolume: []   
  }, 

  validate: function(attrs) {   
    this._resetErrors();

    this._validateDepartureCity(attrs.departureCity);
    this._validateShippOptionsWeight(attrs.shippOptionsWeight);

    if(
      this.get('errorsDepartureCity').length != 0 ||
      this.get('errorsDestinCity').length != 0 ||
      this.get('errorsShippOptionsWeight').length != 0 ||
      this.get('errorsShippOptionsVolume').length != 0 
    ) { 
      return {
        'departureCity': this.get('errorsDepartureCity'),
        'destinCity': this.get('errorsDestinCity'),
        'shippOptionsWeight': this.get('errorsShippOptionsWeight'),
        'shippOptionsVolume': this.get('errorsShippOptionsVolume')
      };
    };
  },

  _resetErrors: function() {
    this.set({'errorsDepartureCity': []});
    this.set({'errorsDestinCity': []});
    this.set({'errorsShippOptionsWeight': []});
    this.set({'errorsShippOptionsVolume': []});    
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

  _validateShippOptionsWeight: function(shippOptionsWeight) {
    var emptyCheckShippOptionsWeight = APP.valuesValidator.emptyCheck(shippOptionsWeight), 
        negativeNumShippOptionsWeight = APP.valuesValidator.negativeNumCheck(shippOptionsWeight), 
        nullNumShippOptionsWeight = APP.valuesValidator.nullNumCheck(shippOptionsWeight), 
        isStrCheckShippOptionsWeight = APP.valuesValidator.isStrCheck(shippOptionsWeight);

    if(emptyCheckShippOptionsWeight) { 
      this.get('errorsShippOptionsWeight').push(emptyCheckShippOptionsWeight) 
    };

    if(negativeNumShippOptionsWeight) { 
      this.get('errorsShippOptionsWeight').push(negativeNumShippOptionsWeight) 
    };

    if(nullNumShippOptionsWeight) { 
      this.get('errorsShippOptionsWeight').push(nullNumShippOptionsWeight) 
    };

    if(isStrCheckShippOptionsWeight) { 
      this.get('errorsShippOptionsWeight').push(isStrCheckShippOptionsWeight) 
    };    
  }

});

