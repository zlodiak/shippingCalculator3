describe("DepartCityView:", function() {
  beforeEach(function () {
    this.view = new APP.DepartCityView();
  });  
  
  it ('should init successful', function () {
    expect(this.view).toBeDefined();
  }); 

/*  it ("produces the correct HTML", function() {

      this.view.render();

      expect(this.view.$el.find("#errMsg_departCity_")).toExist();
      //expect(this.view.template).toBeDefined();

  }); */
});
