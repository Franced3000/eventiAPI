import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { Event, User } from './index';

class Registration extends Model {
  public id!: number;
  public evento_id!: number;
  public utente_id!: number;
  public data_iscrizione!: Date;
}

Registration.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  evento_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  utente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_iscrizione: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Registration',
  tableName: 'iscrizioni',
});

export default Registration;