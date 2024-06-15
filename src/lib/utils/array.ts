/** 打乱数组 */
export function getRandomArr<T>(arr: Array<T>) {
  const randArr = [...arr].sort(() => Math.random() - 0.5);

  return randArr;
}
