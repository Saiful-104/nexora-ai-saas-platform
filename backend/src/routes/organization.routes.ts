import { Router } from "express";
import { createOrganizationController, 
    getOrganizationByIdController, 
    updateOrganizationController ,
} from "../controllers/organization.controller.js";

const router = Router();

router.post("/", createOrganizationController);
router.get("/:id", getOrganizationByIdController);
router.patch("/:id", updateOrganizationController);

export default router;