import { Request } from "express";
import * as bcrypt from "bcrypt";
import { Prisma, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createAdmin = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);
  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createAdminData = await transactionClient.admin.create({
      data: data.admin,
    });
    return createAdminData;
  });

  console.log("object azir", userData);
  return result;
};

export const userService = {
  createAdmin,
};
