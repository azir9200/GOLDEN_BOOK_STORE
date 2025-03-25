import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

//get by ID controller
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data fetched !",
    data: result,
  });
});

//get by ID controller
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AdminService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data fetched by id!",
    data: result,
  });
});

//update controller
const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AdminService.updateIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data updated!",
    data: result,
  });
});

export const AdminController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
};
