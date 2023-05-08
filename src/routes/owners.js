import Router from 'express-promise-router';
import { index, create, get } from '../controllers/owners.js';
import { createOwnerValidator } from '../middlewares/paramsValidators.js';

const router = Router();

router.get('/', index);
router.post('/', createOwnerValidator, create);
router.get('/:id', get);

export default router;
