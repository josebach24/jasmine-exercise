
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount:14000,
    years: 6,
    rate: 19
  }
  expect(calculateMonthlyPayment(values)).toEqual('327.27')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount:14000,
    years: 6,
    rate: 19
  }
  expect(calculateMonthlyPayment(values)).toEqual('327.27')});

/// etc
