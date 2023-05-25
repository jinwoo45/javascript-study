function solution(array) {
  console.log("배열", array);
  console.log("배열의 길이 :", array.length);
  let sortedArray = array.sort((a, b) => a - b);
  let prevValue = -1; //이전 값
  let currentValue = 0; //현재 값
  let count = 0; //빈도 갯수
  let choi = -1; //최빈값
  let isDupChoi = true; //최빈값 중복 여부
  let choiCount = 0;

  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];

    if (prevValue == currentValue) {
      count++;
    } else {
      count = 1;
    }

    if (choiCount == count) {
      if (choi !== currentValue) {
        isDupChoi = true;
      }
    }

    if (count > choiCount) {
      choi = currentValue;
      choiCount = count;
      isDupChoi = false;
    }
    prevValue = currentValue;
  }

  if (isDupChoi) {
    console.log("최빈값 : ", -1);
    return -1;
  }
  console.log("최빈값 : ", choi);

  return choi;
}