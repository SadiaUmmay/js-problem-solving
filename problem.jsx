// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("programming"));

//Problem 3: Check for Palindrome
//Write a function that checks if a string is a palindrome (reads the same forward and backward).

