const anagram = (str1, str2) => {
	const aCharMap = buildCharMap(str1);
	const bCharMap = buildCharMap(str2);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
};

const buildCharMap = (string) => {
	const charMap = {};

	for (let char of string.toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
};

module.exports = anagram;
