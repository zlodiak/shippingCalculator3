APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {   
    this.calculatorModel = new APP.CalculatorModel();
    this.departureCityWidget = new APP.DepartureCityView({model: this.calculatorModel});   
    this.destinationCityWidget = new APP.DestinationCityView({model: this.calculatorModel});
    this.shippingOptionsWidget = new APP.ShippingOptionsView({model: this.calculatorModel});
       
    this.render();
  },    

  el: $('#shippingCalculator'),

  template: _.template($('#calculatorTemplate').html()),

  render: function () {    
    this.$el.html(this.template());
    this.$el.find('#departureCityWidgetContainer').html(this.departureCityWidget.render().el);
    this.$el.find('#destinationCityWidgetContainer').html(this.destinationCityWidget.render().el);
    this.$el.find('#shippingOptionsWidgetContainer').html(this.shippingOptionsWidget.render().el);
    return this;
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