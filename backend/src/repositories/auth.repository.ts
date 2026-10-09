
import prisma from "../lib/prisma.js";

type RegisterUserData = {
  name: string;
  email: string;
  passwordHash: string;
  organizationName: string;
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUserWithOrganization = async (
  data: RegisterUserData
) => {
  return prisma.$transaction(async (tx) => {
    const organization = await tx.organization.create({
      data: {
        name: data.organizationName,
      },
    });

    const user = await tx.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        role: "OWNER",
        organizationId: organization.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        organizationId: true,
        createdAt: true,
      },
    });

    return { user, organization };
  });
};