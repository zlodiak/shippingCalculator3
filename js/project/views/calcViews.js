APP.CalcView = Backbone.View.extend({  

  initialize: function() {   
    this.model = new APP.CalcModel();
    this.departCityWidget = new APP.DepartCityView();   
    this.destinCityWidget = new APP.DestinCityView();
    this.shippOptionsWidget = new APP.ShippOptionsView();
       
    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {    
    this.$el.html(this.template());
    this.$el.find('#departCityWidgetCont').html(this.departCityWidget.render().el);
    this.$el.find('#destinCityWidgetCont').html(this.destinCityWidget.render().el);
    this.$el.find('#shippOptionsWidgetCont').html(this.shippOptionsWidget.render().el);
    return this;
  },

  events:{
    'click #calcSubmitBtn' : 'submit'
  },

  submit: function() { 
    var departCity =          this.$el.find('#fldDepartCity').val(), 
        destinCity =          this.$el.find('#flddestinCity').val(), 
        shippOptionsWeight =  this.$el.find('#fldShippOptionsWeight').val(),
        shippOptionsVolume =  this.$el.find('#fldShippOptionsVolume').val();

    console.log(departCity);
    console.log(destinCity);
    console.log(shippOptionsWeight);
    console.log(shippOptionsVolume);
    console.log(this.model);

    this.model.set({
      'departCity': departCity,
      'destinCity': destinCity,
      'shippOptionsWeight': shippOptionsWeight,
      'shippOptionsVolume': shippOptionsVolume
    });

    

    if(this.model.isValid()) {
      console.log('no validat errors');
    } else {      
      var validErrArr = this.model.validationError;
      console.log(validErrArr);
    };
    
  }  

});


APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) {  
    this.$el.html(this.template(data));
    return this;
  }

});