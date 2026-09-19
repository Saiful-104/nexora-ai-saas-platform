import prisma from "../lib/prisma.js";

export const createOrganization = async (name: string) => {
  const organization = await prisma.organization.create({
    data: {
      name,
    },
  });

  return organization;
};