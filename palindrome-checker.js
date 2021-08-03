function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true
  } else {
    return false
  }
    
    
}



console.log(palindrome("eye"));
