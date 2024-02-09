export class DeviceServices {
  public static async getDeviceById({id}: {id: string}) {
    return {
      id: id,
      device: {
        device_id: `device_${id}`,
        device_name: 'Test',
      },
    };
  }
}
