import { useEffect, useState } from "react";

export function SignalList() {
  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/signals")
      .then((r) => r.json())
      .then(setSignals);
  }, []);

  return (
    <ul>
      {signals.map((s, i) => (
        <li key={i}>{s.name} – score: {s.score}</li>
      ))}
    </ul>
  );
}
