import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'dbUserTask',
    'admin',
    'admin123',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);