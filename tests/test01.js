var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      //assert.equal(-1, [1,2,3].indexOf(0));
      //assert.equal(0, [1,2,3].indexOf(1));
    });

    it("...", function() {
        assert.equal(-1, [1,2,3].indexOf(0));
    });

    it("should return that each string is the same", function() {
        assert.equal("a","a");
    });

    it("should return that each number is the same", function() {
        assert.equal(100,100);
    });
  })
})