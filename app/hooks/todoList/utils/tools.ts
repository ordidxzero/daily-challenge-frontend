export const generateRange = (
  start: number,
  end: number,
  length = end - start + 1,
) => Array.from({ length }, (_, i) => start + i);
