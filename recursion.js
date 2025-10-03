function fibs(n) {
  if (n < 2) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else {
      console.error("Only positive numbers please");
      return;
    }
  }
  let sequence = [0, 1];
  for (let i = n - 2; i > 0; i--) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
}

function fibsRec(n, sequence = [0, 1]) {
  if (n === 2) {
    return sequence;
  }
  if (n < 2) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else {
      console.error("Only positive numbers please");
      return;
    }
  }
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return fibsRec(n - 1, sequence);
}

function mergeSort(arr, sorted = [], compare1 = [], compare2 = []) {
  if (arr.length === 1) {
    return arr;
  }
  compare1 = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
  compare2 = mergeSort(arr.slice(Math.round(arr.length / 2), arr.length));
  while (compare1.length !== 0 && compare2.length !== 0) {
    if (compare1[0] < compare2[0]) {
      sorted.push(compare1[0]);
      compare1.shift();
    } else {
      sorted.push(compare2[0]);
      compare2.shift();
    }
  }
  if (compare1.length !== 0) {
    sorted.push(...compare1);
  }
  if (compare2.length !== 0) {
    sorted.push(...compare2);
  }
  return sorted;
}
