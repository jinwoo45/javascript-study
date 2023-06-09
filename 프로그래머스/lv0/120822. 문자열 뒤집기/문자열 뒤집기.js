function solution(string) {
  console.log(string);

  const reverseString = string.split("").reverse().join("");
  console.log(reverseString);
  return reverseString;
}