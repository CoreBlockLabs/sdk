import { Router } from "express";
import { getSignals } from "./services/signalService";

export const router = Router();

router.get("/signals", async (_req, res) => {
  const data = await getSignals();
  res.json(data);
});
