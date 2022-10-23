export function findOdd(input: string) {
  const arr = input.split(',');
  const res = arr.reduce(
    (acc: any, rec, index) =>
      typeof acc[rec] !== 'undefined'
        ? { ...acc, [rec]: acc[rec] + 1 }
        : { ...acc, [rec]: 1 },
    {}
  );
  for (let e in res) {
    if (res[e] % 2 != 0) return Number(e);
  }
  console.error('Wrong input, all inputs are even!');
}
