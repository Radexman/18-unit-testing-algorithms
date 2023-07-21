const palindrome = require('./palindrome');

describe('Palindrome', () => {
	it('should be a function', () => {
		expect(typeof palindrome).toEqual('function');
	});
	it('should return a boolean', () => {
		expect(typeof palindrome('string')).toEqual('boolean');
	});
	it('should return true if is a palindrome', () => {
		expect(palindrome('wow')).toBeTruthy();
		expect(palindrome('kayak')).toBeTruthy();
		expect(palindrome('rotator')).toBeTruthy();
	});
	it('should return false if is a palindrome', () => {
		expect(palindrome('hello')).toBeFalsy();
		expect(palindrome('world')).toBeFalsy();
		expect(palindrome('shit')).toBeFalsy();
	});
	it('should terurn false if includes sapces', () => {
		expect(palindrome(' wow')).toBeFalsy();
	});
});
