function solution(n) {
  const slicesPerPerson = n / 7;

  if (slicesPerPerson % 1 == 0) {
    console.log(slicesPerPerson);
    return slicesPerPerson;
  } else {
    console.log(parseInt(slicesPerPerson) + 1);
    return parseInt(slicesPerPerson) + 1;
  }

  let answer;
  return answer;
}

