import { Tareas } from '../models/tareas.js';

export async function getTareas(req, res) {
    try {
      const tareas = await Tareas.findAll({
        attributes: ['id', 'usuarioId', 'nombre', 'estado'],
        order: [['id', 'DESC']],
      });
  
      res.json(tasks);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function createTarea(req, res) {
    const { nombre, estado, usuarioId } = req.body;
    try {
      const newTarea = await Tareas.create({
        usuarioId,
        nombre,
        estado
      });
      res.json(newTarea);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function getTarea(req, res) {
    const { id } = req.params;
    try {
      const tarea = await Tareas.findOne({
        where: { id },
      });
      return res.json(tarea);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function updateTarea(req, res) {
    const { id } = req.params;
  
    try {
      const tarea = await Tareas.findOne({
        attributes: ['nombre', 'usuarioId', 'estado', 'id'],
        where: { id },
      });
  
      tarea.set(req.body);
  
      await tarea.save();
  
      return res.json(tarea);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function deleteTarea(req, res) {
    const { id } = req.params;
    try {
      await Tareas.destroy({
        where: { projectId: id },
      });
      return res.sendStatus(204);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }