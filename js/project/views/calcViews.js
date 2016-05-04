APP.CalcView = Backbone.View.extend({  

  initialize: function() {   
    this.model = new APP.CalcModel();
    this.departCityWidget = new APP.DepartCityView();   
    this.destinationCityWidget = new APP.DestinationCityView();
    this.shippingOptionsWidget = new APP.ShippingOptionsView();
       
    this.render();
  },    

  template: _.template($('#calcTemplate').html()),

  render: function () {    
    this.$el.html(this.template());
    this.$el.find('#departCityWidgetContainer').html(this.departCityWidget.render().el);
    this.$el.find('#destinationCityWidgetContainer').html(this.destinationCityWidget.render().el);
    this.$el.find('#shippingOptionsWidgetContainer').html(this.shippingOptionsWidget.render().el);
    return this;
  },

  events:{
    'click #calcSubmitButton' : 'submit'
  },

  submit: function() { 
    var departCity =         this.$el.find('#fldDepartCity').val(), 
        destinationCity =       this.$el.find('#fldDestinationCity').val(), 
        shippingOptionsWeight = this.$el.find('#fldShippingOptionsWeight').val(),
        shippingOptionsVolume = this.$el.find('#fldShippingOptionsVolume').val();

    console.log(departCity);
    console.log(destinationCity);
    console.log(shippingOptionsWeight);
    console.log(shippingOptionsVolume);
    console.log(this.model);

    this.model.set({
      'departCity': departCity,
      'destinationCity': destinationCity,
      'shippingOptionsWeight': shippingOptionsWeight,
      'shippingOptionsVolume': shippingOptionsVolume
    });

    

    if(this.model.isValid()) {
      console.log('no validat errors');
    } else {      
      var validationErrorArr = this.model.validationError;
      console.log(validationErrorArr);
    };
    
  }  

});


APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTemplate').html()),

  render: function (data) {  
    this.$el.html(this.template(data));
    return this;
  }

});