APP.DepartCityView = Backbone.View.extend({   

  id: 'departCityWidget',

  template: _.template($('#departCityTemplate').html()),

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

  id: 'shippingOptionsWidget',

  template: _.template($('#shippingOptionsTemplate').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
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