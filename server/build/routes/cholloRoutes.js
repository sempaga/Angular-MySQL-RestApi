"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chollosController_1 = require("../controllers/chollosController");
class CholloRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', chollosController_1.cholloController.list);
        this.router.get('/:id', chollosController_1.cholloController.oneChollo);
        this.router.post('/', chollosController_1.cholloController.create);
        this.router.delete('/:id', chollosController_1.cholloController.delete);
        this.router.put('/:id', chollosController_1.cholloController.update);
    }
}
const cholloRoutes = new CholloRoutes();
exports.default = cholloRoutes.router;
