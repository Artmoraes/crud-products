"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _App_instances, _App_config;
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const error_1 = __importDefault(require("./middlewares/error"));
const statusCode_1 = __importDefault(require("./utils/statusCode"));
class App {
    constructor() {
        _App_instances.add(this);
        this.app = (0, express_1.default)();
        __classPrivateFieldGet(this, _App_instances, "m", _App_config).call(this);
    }
    ;
    ;
    start(PORT) {
        this.app.listen(PORT, () => console.log(`LINK API - http://localhost:${PORT}`));
    }
    ;
}
exports.App = App;
_App_instances = new WeakSet(), _App_config = function _App_config() {
    const accessControl = (_req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT,PATCH");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    };
    this.app.use(express_1.default.json());
    this.app.use(accessControl);
    // Rota principal para mostrar o início da API
    this.app.get('/', (_req, res) => res.status(statusCode_1.default.OK).json({ OK: true }));
    this.app.use(error_1.default);
};
// A execução dos testes de cobertura depende dessa exportação
exports.app = new App().app;
