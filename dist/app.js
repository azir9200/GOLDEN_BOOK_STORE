"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// ✅ Configure CORS
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://car-refresh-service-87ur6gbfy-azir-uddins-projects.vercel.app",
    ],
    credentials: true,
}));
// app.use(cookieParser());
// ✅ Body parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.options("*", (0, cors_1.default)());
app.get("/", (req, res) => {
    res.send({
        message: "golden book store server..",
    });
});
// ✅ Serve API Routes
app.use("/api/v1", routes_1.default);
app.use(globalErrorHandler_1.default);
exports.default = app;
