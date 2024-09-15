import { Router } from 'express';
import {getLanding} from '../controllers/correos.controller.js';

const router = Router();

router.get('/json-data', getLanding);

export default router;