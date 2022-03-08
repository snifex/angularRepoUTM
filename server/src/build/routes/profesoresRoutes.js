"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesoresController_1 = require("../controllers/profesoresController");
class ProfesoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profesoresController_1.profesoresController.list);
        this.router.get('/:idProfesor', profesoresController_1.profesoresController.listOne);
        this.router.post('/create', profesoresController_1.profesoresController.create);
        this.router.delete('/delete/:idProfesor', profesoresController_1.profesoresController.delete);
        this.router.put('/update/:idProfesor', profesoresController_1.profesoresController.update);
        this.router.get('/profesores-by-carrera/:idCarrera', profesoresController_1.profesoresController.listProfesoresByCarrera);
        this.router.get('/profesores-by-articulo/:idArticulo', profesoresController_1.profesoresController.listProfesoresByArticulo);
        this.router.get('/existe/:correo/:password', profesoresController_1.profesoresController.existe);
    }
}
const profesoresRoutes = new ProfesoresRoutes();
exports.default = profesoresRoutes.router;
