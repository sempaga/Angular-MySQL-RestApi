"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cholloController = void 0;
const datebase_1 = __importDefault(require("../datebase"));
class ChollosController {
    async list(req, res) {
        const chollos = await datebase_1.default.query('SELECT * FROM chollos');
        res.json(chollos);
    }
    async oneChollo(req, res) {
        const { id } = req.params;
        const chollos = await datebase_1.default.query('SELECT * FROM chollos WHERE id = ?', [id]);
        if (chollos.length > 0) {
            return res.json(chollos[0]);
        }
        res.status(404).json({ text: "Chollo no encontrado" });
    }
    async create(req, res) {
        console.log(req.body);
        await datebase_1.default.query('INSERT INTO chollos set ?', [req.body]);
        res.json({ message: 'Chollo guardado' });
    }
    async delete(req, res) {
        const { id } = req.params;
        await datebase_1.default.query('DELETE FROM chollos WHERE id = ?', [id]);
        res.json({ text: 'El chollo a sido eliminado' });
    }
    async update(req, res) {
        const { id } = req.params;
        await datebase_1.default.query('UPDATE chollos set ? WHERE id = ?', [req.body, id]);
        res.json({ text: 'Chollo actualizado' });
    }
}
exports.cholloController = new ChollosController();
