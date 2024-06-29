import Registration from '../models/Registration';

class RegistrationService {
  static async createRegistration(data: any) {
    return await Registration.create(data);
  }

  // Altri metodi CRUD...
}

export default RegistrationService;
