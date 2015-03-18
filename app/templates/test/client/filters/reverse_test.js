describe('Reverse filter', function () {
  var reverse;

  beforeEach(module('<%=gen.angModule%>'));

  beforeEach(inject(function($injector) {
    reverse = $injector.get('$filter')('reverse');
  }));

  it('should reverse a list', function () {
    var list = ["1", "2", "3"];
    var result = reverse(list);
    expect(result.length).toEqual(3);
    expect(result).toEqual(["3", "2", "1"]);
  });

  it('should reverse an object', function () {
    var obj = {one: {value: '1'}, two: {value: '2'}, three: {value: '3'}};
    var result = reverse(obj);
    expect(result.length).toEqual(3);
    expect(result).toEqual([{value: '3'}, {value: '2'}, {value: '1'}]);
  });
});