const palindrome = (string) => {
	const reversed = [...string].reverse().join('');
	return string === reversed;
};

module.exports = palindrome;
