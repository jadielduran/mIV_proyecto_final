import express from "express";
import morgan from 'morgan';

const app = express();

// Import routes
import usuariosRoutes from './routes/usuarios.routes.js';
import tareasRoutes from './routes/tareas.routes.js';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/projects', usuariosRoutes);
app.use('/api/tasks', tareasRoutes);

export default app;