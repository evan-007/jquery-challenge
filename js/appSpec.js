describe("validateInput()", function(){
	it('should return false when input is not a number', function(){
		expect(validateInput(2, 'a')).toBe(false);
		expect(validateInput('f', 'w')).toBe(false);
		expect(validateInput('a', 3)).toBe(false);
	});
});

describe('calculate()', function(){
	it('should return the sum when given a + argument', function(){
		expect(calculate(2,3,'+')).toBe(5);
	});
	
	it('should return the difference when given a - argument', function(){
		expect(calculate(3,2,'-')).toBe(1);
	});
});