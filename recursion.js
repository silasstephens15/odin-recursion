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
