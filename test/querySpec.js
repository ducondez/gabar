describe("Query", function() {
  var Query, query;
  beforeEach(function() {
    console.log('Query', Query);
    query = new Query();
    console.log('Query', Query);
  });
  describe("#constructor", function() {
    it('should set options', function() {
      expect(query.limit).toEqual(15);
    });
  });
});