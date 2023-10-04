import { Router } from 'express';

const router = Router();

// Routes
router.get('/', getTareas);

router.post('/', createTarea);

router.put('/:id', updateTarea);

router.delete('/:id', deleteTarea);

router.get('/:id', getTarea);

export default router;