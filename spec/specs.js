describe('fibonacci', function() {
  it('Returns the number-place added to all subsequent numbers before it', function() {
    fibonacci(1).should.equal(0);
  });
  it('Returns 1 for the second number in the sequence', function() {
    fibonacci(2).should.equal(1);
  });
  it('Returns 1 for the third number in the sequence', function() {
    fibonacci(3).should.equal(1);
  });
  it('Returns the Fibonacci sequence number value for the place called', function() {
    fibonacci(9).should.equal(21);
  })
});

