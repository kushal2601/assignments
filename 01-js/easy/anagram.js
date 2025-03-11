/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if( str1.length !== str2.length ) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const freq = new Array(256).fill(0);
  for(let i = 0 ; i < str1.length ; i++){
    freq[str1[i].charCodeAt(0)]++; 
  }
  for(let letter of str2){
    freq[letter.charCodeAt(0)]--;
  }
  for(let i = 0 ; i < 256; i++){
    if(freq[i] !== 0)return false;
  }
  return true;
}

module.exports = isAnagram;
