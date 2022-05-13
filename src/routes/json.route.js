import { Router } from "express";
import jsonController from "../controllers/json.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";

const router = Router();

router.post("/", awaitHandlerFactory(jsonController.createJson));

export default router;
