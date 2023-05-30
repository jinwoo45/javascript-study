function solution(n) {
  console.log(n);
  let array = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }

  let answer = array;
  console.log("답", array);
  return answer;
}