describe("validateInput()", function(){
	it('should return false when both input are not numbers', function(){
		expect(validateInput('f', 'w')).toBe(false);
	});

	it('should return "x" when the first value is not a number', function(){
		expect(validateInput('f', 4)).toBe('x');
	});

	it('should return "y" when the second value is not a number', function(){
		expect(validateInput(2, 'y')).toBe('y');
	});

	it('should return true with valid input', function(){
		expect(validateInput(2,3)).toBe(true);
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