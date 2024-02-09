import {NextFunction, Request, Response} from 'express';
import Services from '~services';

export class DeviceControllers {
  public static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      return res.json(await Services.DeviceServices.getDeviceById({id}));
    } catch (error) {
      next(error);
    }
  }
}
