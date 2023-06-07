function solution(numbers) {
  let hap = 0;

  for (let i = 0; i < numbers.length; i++) {
    hap = hap + numbers[i];
  }

  console.log((hap / numbers.length).toFixed(1));
  return (hap / numbers.length).toFixed(1);
}