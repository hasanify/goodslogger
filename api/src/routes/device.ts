import express from 'express';
import Controllers from '~controllers';

const router = express.Router();

router.get('/:id', Controllers.DeviceControllers.get);

export default router;
