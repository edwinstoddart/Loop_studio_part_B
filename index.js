//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let string1 = 'Rutabagas';
let string2 = 'Chemistry';
let combo = '';

for (let i = 0; i < string1.length; i++) {
  combo += string1[i] + string2[i];
}

console.log(combo)