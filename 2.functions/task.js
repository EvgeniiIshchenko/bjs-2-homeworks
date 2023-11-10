"use strict";
function getArrayParams(...arr) {
  if (!arr.length) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = arr.reduce((acc, cur) => acc += cur, 0);

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  return maxValue - minValue;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumOddElement += arr[i];
    } else {
      sumEvenElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
