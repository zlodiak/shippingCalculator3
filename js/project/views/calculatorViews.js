APP.CalculatorView = Backbone.View.extend({  

  initialize: function() {   
    this.departureCityWidget = new APP.DepartureCityView();   
    this.destinationCityWidget = new APP.DestinationCityView();
    this.shippingOptionsWidget = new APP.ShippingOptionsView();
       
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