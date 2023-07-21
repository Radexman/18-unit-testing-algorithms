const reverseString = require('./reversestring');

describe('Reverse String', () => {
	it('should be a function', () => {
		expect(typeof reverseString).toEqual('function');
	});
	it('should return a string', () => {
		expect(typeof reverseString('string')).toEqual('string');
	});
	it('should return the reversed string', () => {
		expect(reverseString('string')).toEqual('gnirts');
		expect(reverseString('hello')).toEqual('olleh');
		expect(reverseString('hello world')).toEqual('dlrow olleh');
	});
});
