import prisma from "../lib/prisma.js";


export const createOrganization = async (name: string) => {
  return prisma.organization.create({
    data: {
      name,
    },
  });
};

export const getOrganizationById = async (id: string) => {
  return prisma.organization.findUnique({
    where: {
      id,
    },
  });
};

export const updateOrganization = async (
  id: string,
  data: { name?: string }
) => {
  return prisma.organization.update({
    where: {
      id,
    },
    data,
  });
};