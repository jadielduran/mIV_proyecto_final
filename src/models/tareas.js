import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Tareas = sequelize.define(
    'tareas',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        nombre: {
           type: DataTypes.STRING,
           allowNull: false,
           comment: 'nombre de la tarea',
         }, 
        estado: {
           type: DataTypes.BOOLEAN,
           allowNull: false,
           comment: 'estado de la tarea',
         },  
    }
);