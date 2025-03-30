"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const admin_route_1 = require("../modules/admin/admin.route");
const books_route_1 = require("../modules/book/books.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.userRoutes,
    },
    {
        path: "/admin",
        route: admin_route_1.AdminRoutes,
    },
    {
        path: "/book",
        route: books_route_1.BooksRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
