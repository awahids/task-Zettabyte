/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "fslow", "flight"];

function result(words) {
  // Your Code Here
  for (let i = 0; i < words.length; i++) {
    return words[i].substring(0, 2);
  }
}
console.log(result(words));
