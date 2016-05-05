describe("DepartCityModel", function() {
  var DATA = {
    errDepartCity: ['qwerty', 'asdfgh'],
    errDestinCity: ['qwerty', 'asdfgh'],
    errShippOptionsWeight: ['qwerty', 'asdfgh'],
    errShippOptionsVolume: ['qwerty', 'asdfgh']
  }

  beforeEach(function() {
    this.model = new APP.CalcModel(DATA);
  });  

  it("should is defined", function() {
    expect(this.model).toBeDefined();
  });
});
