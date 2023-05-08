import Router from 'express-promise-router';
import { index, create, get, update, remove, associateUsers, search, download } from '../controllers/documents.js';
import { upload } from'../helpers/storage.js';
import { associateUsersValidator, createAndUpdateDocumentValidator } from '../middlewares/paramsValidators.js';

const router = Router();

router.get('/search', search);
router.get('/', index);
router.post('/', upload.single('attachment'), createAndUpdateDocumentValidator, create);
router.put('/:id/users', associateUsersValidator, associateUsers);
router.put('/:id', upload.single('attachment'), createAndUpdateDocumentValidator, update);
router.get('/:id', get);
router.delete('/:id', remove);
router.get('/:id/download', download);

export default router;
