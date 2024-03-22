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
const CustomError_1 = __importDefault(require("../helpers/CustomError"));
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.email.length) || !((_b = req.body) === null || _b === void 0 ? void 0 : _b.password.length)) {
                throw new Error(400, 'All fields must be filled');
            }
            const token = yield this.userService.login(req.body);
            res.status(200).json({ token });
        });
    }
    validate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.headers.authorization) {
                throw new CustomError_1.default(400, 'Token not found');
            }
            const role = yield this.userService.validate(req.headers.authorization);
            res.status(200).json({ role });
        });
    }
}
exports.default = UserController;
