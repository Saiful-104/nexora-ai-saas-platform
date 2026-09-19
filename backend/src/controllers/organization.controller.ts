import { Request, Response, NextFunction } from "express";
import { createOrganization } from "../services/organization.service.js";
import { createOrganizationSchema } from "../validators/organization.validator.js";

export const createOrganizationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = createOrganizationSchema.parse(req.body);

    const organization = await createOrganization(validatedData.name);

    res.status(201).json(organization);
  } catch (error) {
    next(error);
  }
};