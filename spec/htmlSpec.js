describe('The Overall DOM', function() {
  var myButton = document.getElementById('myBtn');

    it('The DOM lives', function() {
      expect(typeof document).to.equal( 'object');
    })

     it('Title of the DOM', function() {
       expect(document.title).to.equal('Chia Test');
     })

     it('It has a button object', function() {
       expect(typeof myButton).to.equal('object');
     })

     it('The button has words', function() {
       expect(myButton.innerHTML).to.equal('I am a button');
     })

  });

describe('Click is Responsive', function() {
  var myButton = document.getElementById('myBtn');
     before(function(done) {
       myButton.click();
       done();
     });

     it('The button does a trick', function() {
       expect(myButton.innerHTML).to.equal('pressed');
     })
});
