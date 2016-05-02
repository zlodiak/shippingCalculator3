APP.DepartureCityView = Backbone.View.extend({   

  id: 'departureCityWidget',

  template: _.template($('#departureCityTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.DestinationCityView = Backbone.View.extend({   

  id: 'destinationCityWidget',

  template: _.template($('#destinationCityTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.ShippingOptionsView = Backbone.View.extend({    

  tagName: 'div',

  className: 'shipping_options_container col-xs-12',

  id: 'shippingOptionsContainer',

  template: _.template($('#shippingOptionsTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  },

  notValidMarkAdd: function(errorMessagesArr) {
    if(errorMessagesArr.weight.length != 0) {
      this.$el.find('#fldShippingOptionsWeight').removeClass('valid').addClass('not_valid');

      this.$el.find('#errorMessageShippingOptionsWeight').html('');
      for(key in errorMessagesArr.weight) {
        this.$el.find('#errorMessageShippingOptionsWeight').append(errorMessagesArr.weight[key] + '<br>');
      };       
    }; 

    if(errorMessagesArr.volume.length != 0) {
      this.$el.find('#fldShippingOptionsVolume').removeClass('valid').addClass('not_valid');

      this.$el.find('#errorMessageShippingOptionsVolume').html('');
      for(key in errorMessagesArr.volume) {
        this.$el.find('#errorMessageShippingOptionsVolume').append(errorMessagesArr.volume[key] + '<br>');
      };       
    }; 
  },

  validMarkAdd: function() {  
    this.$el.find('#fldShippingOptionsWeight, #fldShippingOptionsVolume')
      .removeClass('not_valid')
      .addClass('valid');

    this.$el.find('#errorMessageShippingOptionsWeight, #errorMessageShippingOptionsVolume').html('');
  }  

});


APP.OversizedCargoView = Backbone.View.extend({    

  initialize: function() {  
    this.listenTo(this.model, 'change', this.render);
  },

  tagName: 'div',

  className: 'oversized_cargo_container col-xs-12',

  id: 'oversizedCargoContainer',

  template: _.template($('#oversizedCargoTemplate').html()),

  render: function() {  
    if(this.model.get('activeState')) {
      this.activeState = 'checked';
      this.visibility = 'show';
    } else {
      this.activeState = '';
      this.visibility = 'hide';
    };

    this.$el.html(this.template({
      'activeState': this.activeState,
      'visibility': this.visibility
    }));
    return this;
  }, 

  events:{
    'click #oversizedCargoStateCheckbox' : 'toggleState'
  },

  toggleState: function() {
    var state = this.model.get('activeState');

    state = !state;

    this.model.set({'activeState': state});
  }

});