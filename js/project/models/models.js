window.APP = window.APP || {};

APP.CityOfDepartureModel = Backbone.Model.extend({
  defaults: {
    activeState: true,
    cityName: undefined
  }, 

  validate: function(attrs) {   
    var errorsArr = [];

    if($.trim(attrs.cityName).length == 0) { 
        errorsArr.push('Это поле не может быть пустым'); 
    } else {
        if(isNaN(attrs.cityName) == false) { 
            errorsArr.push('Это поле не может быть цифрой'); 
        };    
    };  

    if(errorsArr.length != 0) { return errorsArr };
  }  
});


APP.CityOfDestinationModel = Backbone.Model.extend({
  defaults: {
    activeState: true,
    cityName: undefined
  }, 

  validate: function(attrs) {  
    var errorsArr = [];

    if($.trim(attrs.cityName).length == 0) { 
        errorsArr.push('Это поле не может быть пустым'); 
    } else {
        if(isNaN(attrs.cityName) == false) { 
            errorsArr.push('Это поле не может быть цифрой'); 
        };    
    };  

    if(errorsArr.length != 0) { return errorsArr };
  }  
});


APP.ShippingOptionsModel = Backbone.Model.extend({
  defaults: {
    activeState: true,
    weight: undefined,
    volume: undefined
  }, 

  validate: function(attrs) {  
    var errorsArr = {
        'weight': [], 
        'volume': []
    };

    if($.trim(attrs.weight).length == 0) { 
        errorsArr.weight.push('Это поле не может быть пустым'); 
    } else {
        if(isNaN(attrs.weight) == true) { 
            errorsArr.weight.push('Это значение должно быть цифрой'); 
        };   

        if(attrs.weight <= 0) { 
            errorsArr.weight.push('Это значение не может быть меньше нуля'); 
        };  
    };

    if($.trim(attrs.volume).length == 0) { 
        errorsArr.volume.push('Это поле не может быть пустым'); 
    } else {
        if(isNaN(attrs.volume) == true) { 
            errorsArr.volume.push('Это значение должно быть цифрой'); 
        };   

        if(attrs.volume <= 0) { 
            errorsArr.volume.push('Это значение не может быть меньше нуля'); 
        };  
    };    

    if(errorsArr.weight.length != 0 || errorsArr.volume.length != 0) { 
        return errorsArr; 
    };
  }  
});


APP.OversizedCargoModel = Backbone.Model.extend({
  defaults: {
    activeState: false,
    cityName: undefined
  }, 

  validate: function(attrs) {   
    var errorsArr = [];

    if($.trim(attrs.cityName).length == 0) { 
        errorsArr.push('Это поле не может быть пустым'); 
    } else {
        if(isNaN(attrs.cityName) == false) { 
            errorsArr.push('Это поле не может быть цифрой'); 
        };    
    };  

    if(errorsArr.length != 0) { return errorsArr };
  }  
});