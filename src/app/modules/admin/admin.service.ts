
import { Admin, Prisma, UserStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";

//get All fromDB
const getAllFromDB = async (): Promise<Admin[]> => {
  const result = await prisma.admin.findMany({});
  return result;
};

//getBy Id fromDB
const getByIdFromDB = async (id: string): Promise<Admin | null> => {
    const result = await prisma.admin.findUnique({
      where: {
        id,
        isDeleted: false,
      },
    });
  
    return result;
  };

  //update service
const updateIntoDB = async (
    id: string,
    data: Partial<Admin>
  ): Promise<Admin> => {
    console.log("checker");
    await prisma.admin.findUniqueOrThrow({
      where: {
        id,
        isDeleted: false,
      },
    });
    // console.log("object", isExists);
    const result = await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
    return result;
  };

  export const AdminService = {
 getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    // deleteFromDB,
    // softDeleteFromDB,
  };