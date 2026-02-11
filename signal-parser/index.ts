export function parseSignals(data: any[]) {
  return data.map((d) => ({
    name: d.token,
    momentum: d.mentions
  }));
}
