export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandom<T>(collection: Array<T>): T {
  if (collection.length === 0) {
    throw new Error("Collection must have at least one item");
  }
  return collection[getRandomInt(1, collection.length) - 1];
}
