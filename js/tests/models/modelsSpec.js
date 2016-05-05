describe("CalcModel:", function() {
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


  describe("_resetErr", function() {
    it("should errDepartCity is not empty after init", function() {
      var ModelcountElem = this.model.get('errDepartCity').length,
          DATAcountElem = DATA.errDepartCity.length;

      expect(ModelcountElem).toEqual(DATAcountElem)
    });  

    it("should errDepartCity is empty after _resetErr()", function() {
      this.model._resetErr();

      var ModelcountElem = this.model.get('errDepartCity').length,
          DATAcountElem = DATA.errDepartCity.length;    

      expect(ModelcountElem).toEqual(0)
    });   

    it("should all errors props is empty after _resetErr()", function() {
      this.model._resetErr();

      var ModelcountElems = this.model.get('errDepartCity').length + 
                            this.model.get('errDestinCity').length +
                            this.model.get('errShippOptionsWeight').length +
                            this.model.get('errShippOptionsVolume').length;

      var DATAcountElem = DATA.errDepartCity.length;    

      expect(ModelcountElems).toEqual(0)
    });    
  });
});



//_resetErr