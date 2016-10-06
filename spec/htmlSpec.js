var assert = require('assert');

describe('DOM', function() {
  describe('Object check', function() {
    it('The DOM lives', function() {
      assert.equal(typeof document, 'object');
    })
  })

  describe('Document/Html', function() {
    it('Title of the DOM', function() {
      expect(document.title).to.equal('Chia Test');
    })
  })
});

  //document.images
  ////change an images's attributes.
  //document.getElementById("exam")
  //document.getElementById("myBtn").onclick = displayDate;

