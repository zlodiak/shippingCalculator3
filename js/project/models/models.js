window.APP = window.APP || {};

APP.CalcModel = Backbone.Model.extend({
  defaults: {
    departCity: undefined,
    destinCity: undefined,
    shippOptionsWeight: undefined,
    shippOptionsVolume: undefined,
    errDepartCity: [],
    errDestinCity: [],
    errShippOptionsWeight: [],
    errShippOptionsVolume: []   
  }, 

  validate: function(attrs) {   
    this._resetErr();

    this._validDepartCity(attrs.departCity);
    this._validShippOptionsWeight(attrs.shippOptionsWeight);

    if(
      this.get('errDepartCity').length != 0 ||
      this.get('errDestinCity').length != 0 ||
      this.get('errShippOptionsWeight').length != 0 ||
      this.get('errShippOptionsVolume').length != 0 
    ) { 
      return {
        'departCity': this.get('errDepartCity'),
        'destinCity': this.get('errDestinCity'),
        'shippOptionsWeight': this.get('errShippOptionsWeight'),
        'shippOptionsVolume': this.get('errShippOptionsVolume')
      };
    };
  },

  _resetErr: function() {
    this.set({'errDepartCity': []});
    this.set({'errDestinCity': []});
    this.set({'errShippOptionsWeight': []});
    this.set({'errShippOptionsVolume': []});    
  },

  _validDepartCity: function(city) { 
    var emptyCheck = APP.valuesValidator.emptyCheck(city), 
        isNumCheck = APP.valuesValidator.isNumCheck(city);

    if(emptyCheck) { 
      this.get('errDepartCity').push(emptyCheck) 
    };

    if(isNumCheck) { 
      this.get('errDepartCity').push(isNumCheck) 
    };    
  },

  _validShippOptionsWeight: function(weight) {
    var emptyCheckWeight = APP.valuesValidator.emptyCheck(weight), 
        minusNumWeight = APP.valuesValidator.minusNumCheck(weight), 
        nullNumWeight = APP.valuesValidator.nullNumCheck(weight), 
        isStrCheckWeight = APP.valuesValidator.isStrCheck(weight);

    if(emptyCheckWeight) { 
      this.get('errWeight').push(emptyCheckWeigh) 
    };

    if(minusNumWeight) { 
      this.get('errWeight').push(minusNumWeight) 
    };

    if(nullNumWeight) { 
      this.get('errWeight').push(nullNumWeight) 
    };

    if(isStrCheckWeight) { 
      this.get('errWeight').push(isStrCheckWeight) 
    };    
  }

});

