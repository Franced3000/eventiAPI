import User from '../models/User';
import { hashPassword } from '../utils/hash';

class UserService {
  static async createUser(data: any) {
    data.password = await hashPassword(data.password);
    return await User.create(data);
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id: number) {
    return await User.findByPk(id);
  }

  static async updateUser(id: number, data: any) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(data);
    }
  }

  static async deleteUser(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
  }
}

export default UserService;
