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

    if(emptyCheckDepartureCity) { this.get('errorsDepartureCity').push(emptyCheckDepartureCity) };
    if(isNumCheckDepartureCity) { this.get('errorsDepartureCity').push(isNumCheckDepartureCity) };    
  },

  _validateDestinationCity: function() {
    var emptyCheckShippingOptionsWeight = this.emptyCheck(attrs.shippingOptionsWeight), 
        negativeNumShippingOptionsWeight = this.negativeNumCheck(attrs.shippingOptionsWeight), 
        nullNumShippingOptionsWeight = this.nullNumCheck(attrs.shippingOptionsWeight), 
        isStrCheckShippingOptionsWeight = this.isStrCheck(attrs.shippingOptionsWeight);

    if(emptyCheckShippingOptionsWeight) { this.errorsShippingOptionsWeight.push(emptyCheckShippingOptionsWeight) };
    if(negativeNumShippingOptionsWeight) { this.errorsShippingOptionsWeight.push(negativeNumShippingOptionsWeight) };
    if(nullNumShippingOptionsWeight) { this.errorsShippingOptionsWeight.push(nullNumShippingOptionsWeight) };
    if(isStrCheckShippingOptionsWeight) { this.errorsShippingOptionsWeight.push(isStrCheckShippingOptionsWeight) };    
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

