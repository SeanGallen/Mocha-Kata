describe('DOM', function() {
    it('The DOM lives', function() {
      expect(typeof document).to.equal( 'object');
    })

     it('Title of the DOM', function() {
       expect(document.title).to.equal('Chia Test');
     })
  });

