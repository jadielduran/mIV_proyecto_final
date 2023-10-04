import express, { Router } from "express";
import {
    getUsuarios,
    createUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarioTareas,
    getUsuariosTareas,
  } from '../controllers/project.controller.js';
const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.get('/:id', getUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id/tareas', getUsuarioTareas);

router.get('/usuarios/listar-tareas', getUsuariosTareas);

export default router;