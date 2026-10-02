import { Request, Response } from "express";

import {
  createOrganization,
  getOrganizationById,
  updateOrganization,
} from "../services/organization.service.js";

import {
  createOrganizationSchema,
  updateOrganizationSchema,
} from "../validators/organization.validator.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/sendResponse.js";

export const createOrganizationController = asyncHandler(
  async (req: Request, res: Response) => {
    const validatedData = createOrganizationSchema.parse(req.body);

    const organization = await createOrganization(validatedData.name);

 sendResponse(
  res,
  201,
  "Organization created successfully",
  organization
);
  }
);

export const getOrganizationByIdController = asyncHandler(
  async (req: Request, res: Response) => {
       const organization = await getOrganizationById(req.params.id);

    sendResponse(
      res,
      200,
      "Organization fetched successfully",
      organization
    );
  }
)

export const updateOrganizationController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const validatedData = updateOrganizationSchema.parse(req.body);
    const organization = await updateOrganization(id, validatedData);

    sendResponse(
      res,
      200,
      "Organization updated successfully",
      organization
    );
  }
);
