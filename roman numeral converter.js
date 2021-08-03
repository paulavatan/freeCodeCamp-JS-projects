function convertToRoman(num) {
  let roman = "";
  const romanList = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL: 40, X:10, IX:9, V:5, IV:4, I:1};

  if(num<1 || num>3999) {
    return "Please enter a number between 1 and 3999";
  } else {
     for ( let i in romanList ) {
	      while ( num >= romanList[i] ) {
	         roman += i;
	         num -= romanList[i];
	      }
	    }
	  return roman;
	}

} 

console.log(convertToRoman(44));