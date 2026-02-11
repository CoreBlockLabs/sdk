export function runAI(data: any[]) {
  // fake AI scoring
  return data.map((d) => ({
    ...d,
    score: Math.min(100, d.momentum)
  }));
}
