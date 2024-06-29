import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

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
    references: { model: 'Event', key: 'id' },
    allowNull: false,
  },
  utente_id: {
    type: DataTypes.INTEGER,
    references: { model: 'User', key: 'id' },
    allowNull: false,
  },
  data_iscrizione: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Registration',
  tableName: 'iscrizioni',
});

export default Registration;
