
import { AppError } from "../errors/AppError.js";
import { hashPassword } from "../utils/password.js";

import {
  findUserByEmail,
  createUserWithOrganization,
} from "../repositories/auth.repository.js";

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  organizationName: string;
};

export const registerUser = async (data: RegisterInput) => {
    const existingUser = await findUserByEmail(data.email);

if (existingUser) {
  throw new AppError("Email is already registered", 409);
}
const passwordHash = await hashPassword(data.password);
const result = await createUserWithOrganization({
  name: data.name,
  email: data.email,
  passwordHash,
  organizationName: data.organizationName,
});
return result;
};