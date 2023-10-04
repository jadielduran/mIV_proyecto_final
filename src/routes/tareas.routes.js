import { Router } from 'express';
import {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea,
    getTarea
} from '../controllers/tareas.controller.js'

const router = Router();

// Routes
router.get('/', getTareas);

router.post('/', createTarea);

router.put('/:id', updateTarea);

router.delete('/:id', deleteTarea);

router.get('/:id', getTarea);

export default router;