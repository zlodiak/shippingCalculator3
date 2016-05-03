window.APP = window.APP || {};

APP.CalculatorModel = Backbone.Model.extend({
  defaults: {
    departureCity: undefined,
    destinationCity: undefined,
    shippingOptionsWeight: undefined,
    shippingOptionsVolume: undefined,
    errorsDepartureCity: [],
    errorsDestinationCity: [],
    errorsShippingOptionsWeight: [],
    errorsShippingOptionsVolume: []   
  }, 

  validate: function(attrs) {   
    this._resetErrors();

    this._validateDepartureCity(attrs.departureCity);
    this._validateShippingOptionsWeight(attrs.shippingOptionsWeight);

    if(
      this.get('errorsDepartureCity').length != 0 ||
      this.get('errorsDestinationCity').length != 0 ||
      this.get('errorsShippingOptionsWeight').length != 0 ||
      this.get('errorsShippingOptionsVolume').length != 0 
    ) { 
      return {
        'departureCity': this.get('errorsDepartureCity'),
        'destinationCity': this.get('errorsDestinationCity'),
        'shippingOptionsWeight': this.get('errorsShippingOptionsWeight'),
        'shippingOptionsVolume': this.get('errorsShippingOptionsVolume')
      };
    };
  },

  _resetErrors: function() {
    this.set({'errorsDepartureCity': []});
    this.set({'errorsDestinationCity': []});
    this.set({'errorsShippingOptionsWeight': []});
    this.set({'errorsShippingOptionsVolume': []});    
  },

  _validateDepartureCity: function(departureCity) { 
    var emptyCheckDepartureCity = this.emptyCheck(departureCity), 
        isNumCheckDepartureCity = this.isNumCheck(departureCity);

    if(emptyCheckDepartureCity) { 
      this.get('errorsDepartureCity').push(emptyCheckDepartureCity) 
    };

    if(isNumCheckDepartureCity) { 
      this.get('errorsDepartureCity').push(isNumCheckDepartureCity) 
    };    
  },

  _validateShippingOptionsWeight: function(shippingOptionsWeight) {
    var emptyCheckShippingOptionsWeight = this.emptyCheck(shippingOptionsWeight), 
        negativeNumShippingOptionsWeight = this.negativeNumCheck(shippingOptionsWeight), 
        nullNumShippingOptionsWeight = this.nullNumCheck(shippingOptionsWeight), 
        isStrCheckShippingOptionsWeight = this.isStrCheck(shippingOptionsWeight);

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

