import { Usuarios } from '../models/usuarios.js';
import { Tareas } from '../models/tareas.js';

export async function getUsuarios(req, res) {
    try {
      const usuarios = await Usuarios.findAll({
        attributes: ['id', 'nombre', 'correo', 'contrasena', 'estado'],
      });
  
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function createUsuario(req, res) {
    console.log('Creating Users', req.body);
    const { nombre, correo, contrasena } = req.body;
    try {
      const newUsuario = await Usuarios.create(
        {
          nombre,
          correo,
          contrasena,
        },
        {
          fields: ['nombre', 'correo', 'contrasena'],
        }
      );
      return res.json(newUsuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function getUsuario(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuarios.findOne({
        where: { id },
      });
      return res.json(usuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function updateUsuario(req, res) {
    const { id } = req.params;
    const { nombre, correo, contrasena } = req.body;
  
    try {
      const usuario = await Usuarios.findByPk(id);
      usuario.nombre = nombre;
      usuario.correo = correo;
      usuario.contrasena = contrasena;
  
      await usuario.save();
  
      return res.json(usuario);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
      await Tareas.destroy({
        where: { usuarioId: id },
      });
      await Usuarios.destroy({
        where: { id },
      });
      return res.sendStatus(204);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function getUsuarioTareas(req, res) {
    const { id } = req.params;
    try {
      const tareas = await Tareas.findAll({
        attributes: ['id', 'usuarioId', 'nombre', 'estado'],
        where: { usuarioId: id },
      });
      return res.json(tareas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export async function getUsuariosTareas(req, res) {
    try {
      const usuarios = await Usuarios.findAll({
        attributes: ['id', 'nombre', 'correo', 'contrasena'],
        include: [
          {
            model: Tareas,
            attributes: ['id', 'nombre', 'estado'],
            required: true,
          },
        ],
      });
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }