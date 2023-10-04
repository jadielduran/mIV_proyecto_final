import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Tareas } from "./tareas.js";

export const Usuarios = sequelize.define(
    'usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        nombre: {
           type: DataTypes.STRING,
           allowNull: false,
           comment: 'nombre del usuario',
         }, 
        correo: {
           type: DataTypes.STRING,
           allowNull: false,
           comment: 'correo del usuario',
         },
        contrasena: {
           type: DataTypes.STRING,
           allowNull: false,
           comment: 'constrasenia del usuario',
         },
        estado: {
           type: DataTypes.BOOLEAN,
           allowNull: false,
           comment: 'estado del usuario',
         },  
    }
);
Usuarios.hasMany(Tareas, {
    foreignKey: 'usuarioId',
    sourceKey: 'id',
  });
  
Tareas.belongsTo(Usuarios, {
    foreignKey: 'usuarioId',
    targetKey: 'id',
  });