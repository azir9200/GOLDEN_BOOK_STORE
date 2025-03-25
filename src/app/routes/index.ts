import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { BooksRoutes } from "../modules/book/books.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/book",
    route: BooksRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
