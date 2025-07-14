function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (charIndexMap.has(s[end])) {
      start = Math.max(charIndexMap.get(s[end]) + 1, start);
    }
    charIndexMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
console.log(lengthOfLongestSubstring("abcdabcbb"));
