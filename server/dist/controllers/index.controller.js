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
const database_1 = __importDefault(require("../database"));
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.default.query("SELECT * FROM users");
        return res.status(200).json(response.rows);
    }
    catch (err) {
        return res.status(500).json("Internal Error");
    }
});
exports.getUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.default.query(`SELECT * FROM users WHERE id= ${id}`);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        return res.status(500).json("Internal error");
    }
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const response = yield database_1.default.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}')`);
        console.log(response.rows);
        return res.status(200).json("Criado com sucesso!");
    }
    catch (err) {
        return res.status(500).json("Internal Error");
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    yield database_1.default.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
        name,
        email,
        id
    ]);
    return res.json(`User ${id} Atualização bem sucedida`);
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.default.query(`DELETE FROM users WHERE id =${id}`);
        return res.status(200).json("Deletado com sucesso");
    }
    catch (err) {
        return res.status(500).json("Internal Error");
    }
});
