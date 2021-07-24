const validAnagram = (word1, word2) => {
    const freq = {};
    for (const letter of word1) {
        freq[letter] = ++freq[letter] || 1;
    }
    for (const letter of word2) {
        if (!freq[letter]) return false;
        freq[letter]--;
    }


const validAnagram = (word1, word2) => {
    const freq = {};
    for (const letter of word1) {
        freq[letter] = ++freq[letter] || 1;
    }
    for (const letter of word2) {
        if (!freq[letter]) return false;
        freq[letter]--;
    }
    return true;
}

    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false

