import {Router} from "express";
import { healthCheck } from "../controllers/health.controller";
import organizationRouter from "./organization.routes.js";

const router = Router();

router.get("/", healthCheck )

router.use("/organizations", organizationRouter);
  

export default router;