function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

function rot13(str) {
  let result = "";
  let shift = 13;
  for(let i=0; i<str.length; i++) {
    let letter = str.charCodeAt(i); 
    if (letter >= 65 && letter <= 65 + 26 - 1)
        {
            letter -= 65;
            letter = mod(letter + shift, 26);
            letter += 65;
        }
    result += String.fromCharCode(letter);
  } 
       
   return result; 
  }

console.log(rot13("SERR PBQR PNZC"));