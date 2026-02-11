import { collectData } from "@coreblock/data-collector";
import { parseSignals } from "@coreblock/signal-parser";
import { runAI } from "@coreblock/ai-engine";

export async function getSignals() {
  const raw = await collectData();
  const parsed = parseSignals(raw);
  return runAI(parsed);
}
