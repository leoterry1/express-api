import Router from 'express-promise-router';
import { index, create, get } from '../controllers/users.js';
import { createUserValidator } from '../middlewares/paramsValidators.js';

const router = Router();

router.get('/', index);
router.post('/', createUserValidator, create);
router.get('/:id', get);

export default router;
