// util.js - a bit more detailed comments, different style
export function range(start, end) {
  // If only one number → treat as end, start from 0
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
