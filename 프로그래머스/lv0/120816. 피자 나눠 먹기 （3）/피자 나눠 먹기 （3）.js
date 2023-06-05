function solution(slice, n) {
  const slicesPerPerson = n / slice;

  if (slicesPerPerson % 1 == 0) {
    console.log(slicesPerPerson);
    return slicesPerPerson;
  } else {
    console.log(parseInt(slicesPerPerson) + 1);
    return parseInt(slicesPerPerson) + 1;
  }
}