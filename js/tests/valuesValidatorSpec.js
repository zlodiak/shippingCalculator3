describe("emptyCheck", function() {
  var errorMessage = 'Это значение не может быть пустым';

  it("should return errormessage for empty string", function() {
    expect(APP.valuesValidator.emptyCheck('')).toEqual(errorMessage);
  });

  it("should not return errormessage for not empty string", function() {
    expect(APP.valuesValidator.emptyCheck('string')).not.toEqual(errorMessage);
  });  
});

describe("minusNumCheck", function() {
  var errorMessage = 'Это значение не может быть меньше нуля';

  it("should return errormessage for positive value", function() {
    expect(APP.valuesValidator.minusNumCheck(-6)).toEqual(errorMessage);
  });

  it("should not return errormessage for negative value", function() {
    expect(APP.valuesValidator.minusNumCheck(55)).not.toEqual(errorMessage);
  });  

  it("should not return errormessage for null value", function() {
    expect(APP.valuesValidator.minusNumCheck(0)).not.toEqual(errorMessage);
  });    
});