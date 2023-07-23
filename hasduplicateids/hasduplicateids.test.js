const hadDuplicateIds = require('./hasduplicateids');

describe('DOM Tree Has Duplicate IDs', () => {
	let root;
	beforeEach(() => {
		// Create mock elements
		root = document.createElement('div');
		const child1 = document.createElement('div');
		const child2 = document.createElement('div');

		root.appendChild(child1, child2);
	});
	afterEach(() => {
		root = null;
	});
	it('should be a function', () => {
		expect(typeof hadDuplicateIds).toEqual('function');
	});
	it('should return a boolean', () => {
		expect(typeof hadDuplicateIds()).toEqual('boolean');
	});
	it('should return false if no root element passed in', () => {
		expect(hadDuplicateIds()).toBeFalsy();
	});
	it('should return true if there are duplicate IDs', () => {
		// Add duplicate ids
		root.id = 'root';
		root.children[0].id = 'child';
		root.children[1].id = 'child';

		const result = hadDuplicateIds(root);

		expect(result).toEqual(true);
	});
	it('should return false if there are no duplicate IDs', () => {
		// Add ids
		root.id = 'root';
		root.children[0].id = 'child';
		root.children[1].id = 'child';

		const result = hadDuplicateIds(root);

		expect(result).toEqual(false);
	});
});
