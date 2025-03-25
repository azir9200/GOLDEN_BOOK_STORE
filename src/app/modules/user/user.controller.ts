import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.service";
import httpStatus from "http-status";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req.body);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Created successfully!",
    data: result,
  });
});
export const userController = {
  createAdmin,
};
