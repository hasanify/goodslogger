import express from 'express';
import Controllers from '~controllers';

const router = express.Router();

router.get('/', Controllers.DeviceControllers.get);

export default router;
