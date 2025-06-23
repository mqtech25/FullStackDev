/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let word1 = convertToLowerString(str1)
  let word2= convertToLowerString(str2)
  let wordx1=sortStringByAlpha(word1);
  let wordx2=sortStringByAlpha(word2);

  return wordx1 === wordx2
}

function convertToLowerString(str){
  let result='';
  for(let i=0; i<str.length; i++){
    let strCode=  str.charCodeAt(i);
    if(strCode>64 && strCode<91){
      result+=String.fromCharCode(strCode+32);
    }else{
      result+= str.charAt(i)
    }
  }
  return result;
}
// bubble sort
function sortStringByAlpha(str){
  let strSplitArray=str.split('');
  let result ='';
  let totalStrLength= strSplitArray.length;
  for (let i=0; i < totalStrLength; i++) {
    for(let j=0; j < totalStrLength - i -1; j++){
      if(strSplitArray[j]> strSplitArray[j+1]){
        let tempStr =  strSplitArray[j];
        strSplitArray[j] = strSplitArray[j+1];
        strSplitArray[j+1] = tempStr;
      }
    }
  }
  return strSplitArray.join('')
}

isAnagram('Qasim','Misaq')

module.exports = isAnagram;

// Basic Plan to Check if Two Strings Are Anagrams:
// Remove spaces and make both strings lowercase (to ignore case)
// Sort the characters in each string
// Compare the sorted versions