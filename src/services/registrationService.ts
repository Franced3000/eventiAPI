import Registration from '../models/Registration';

class RegistrationService {
  static async createRegistration(data: any) {
    return await Registration.create(data);
  }

  static async getAllRegistrations() {
    return await Registration.findAll();
  }

  static async getRegistrationById(id: number) {
    return await Registration.findByPk(id);
  }

  static async updateRegistration(id: number, data: any) {
    const user = await Registration.findByPk(id);
    if (user) {
      return await user.update(data);
    }
  }

  static async deleteRegistration(id: number) {
    const user = await Registration.findByPk(id);
    if (user) {
      return await user.destroy();
    }
  }
}


export default RegistrationService;
