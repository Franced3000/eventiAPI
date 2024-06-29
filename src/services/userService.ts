import User from '../models/User';
import { hashPassword } from '../utils/hash';

class UserService {
  static async createUser(data: any) {
    data.password = await hashPassword(data.password);
    return await User.create(data);
  }

  // Altri metodi CRUD...
}

export default UserService;
