import { AppError } from "../errors/AppError.js";

import {
  createOrganization as createOrganizationRepository,
  getOrganizationById as getOrganizationByIdRepository,
  updateOrganization as updateOrganizationRepository,
} from "../repositories/organization.repository.js";

export const createOrganization = async (name: string) => {
  const organization = await createOrganizationRepository(name);

  return organization;
};

export const getOrganizationById = async (id: string) => {
  const organization = await getOrganizationByIdRepository(id);

  if (!organization) {
    throw new AppError("Organization not found", 404);
  }

  return organization;
};

export const updateOrganization = async (
  id: string,
  data: { name?: string }
) => {
  const organization = await getOrganizationByIdRepository(id);

  if (!organization) {
    throw new AppError("Organization not found", 404);
  }

  const updatedOrganization = await updateOrganizationRepository(id, data);

  return updatedOrganization;
};