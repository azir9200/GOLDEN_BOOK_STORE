"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
//get All fromDB
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.admin.findMany({});
    return result;
});
//getBy Id fromDB
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.admin.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    return result;
});
//update service
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("checker");
    yield prisma_1.default.admin.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false,
        },
    });
    // console.log("object", isExists);
    const result = yield prisma_1.default.admin.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
exports.AdminService = {
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    // deleteFromDB,
    // softDeleteFromDB,
};
