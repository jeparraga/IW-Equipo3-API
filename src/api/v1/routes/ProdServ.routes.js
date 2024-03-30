import { Router } from 'express';
import * as prodServController from '../controllers/Prodserv.controller';

const router = Router();
router.get('/', prodServController.getAllProdServ);
router.get('/:id', prodServController.getOneProdServ);
router.post('/', prodServController.postProdServItem);
router.put('/:id', prodServController.updateProdServItem);
router.delete('/:id', prodServController.deleteProdServItem);

export default router;