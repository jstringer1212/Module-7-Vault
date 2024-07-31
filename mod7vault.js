const key1 = 30; //could be written so that 2 variable can be entered
const key2 = 10; //these 2 variables will generate a code for the vault
const firstnumber = key1 + key2; //calculates first number
const secondnumber = firstnumber - key1; //calculates  second number
let thirdnumber = key1 / key1;  //lines 5 thru 7 calculate the final number in the vault code
const lastnumber = key2-thirdnumber;
const finalnumber = lastnumber + key1;


alert('The Vault code is ' + firstnumber + '-' + secondnumber + '-' + finalnumber);