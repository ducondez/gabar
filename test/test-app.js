var assert = require('assert');

describe("Array", function() {
  describe("#indexOf", function() {
    it('should return -1 when value not present', function() {
    	assert.equal(-1, [0].indexOf(5));
    });
  });
});