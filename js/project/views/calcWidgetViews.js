APP.DepartCityView = Backbone.View.extend({   

  id: 'departCityWidget',

  template: _.template($('#departCityTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.DestinCityView = Backbone.View.extend({   

  id: 'destinCityWidget',

  template: _.template($('#destinCityTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.ShippOptionsView = Backbone.View.extend({    

  id: 'shippOptionsWidget',

  template: _.template($('#shippOptionsTpl').html()),

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

  className: 'oversized_cargo_cont col-xs-12',

  id: 'oversizedCargoCont',

  template: _.template($('#oversizedCargoTpl').html()),

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